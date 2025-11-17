import Link from "next/link";
import type { Metadata } from "next";
import { datoCMSFetch } from "@/lib/datocms";
import {
  extractCategories,
  estimateReadTime,
  formatPublishDate,
} from "@/lib/blog";

type RawDatoBlogPost = {
  id: string;
  title: string;
  seoSlug: string;
  publishDate: string | null;
  summary: string | null;
  body: string | null;
  featuredImage?: {
    url: string;
    alt?: string | null;
  } | null;
  author?: string | null;
  categories?: string | null;
  _status?: string | null;
};

type AllBlogsQueryResponse = {
  allBlogs: RawDatoBlogPost[];
  _allBlogsMeta: {
    count: number;
  };
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  categories: string[];
  readTime?: string;
  publishedAt: string;
  author?: string;
  featuredImage?: {
    url: string;
    alt?: string;
  };
};

const ALL_BLOGS_QUERY = `
  query AllBlogs($limit: IntType = 10) {
    allBlogs(orderBy: publishDate_DESC, first: $limit) {
      id
      title
      seoSlug
      publishDate
      summary
      body
      featuredImage {
        url
        alt
      }
      author
      categories
      _status
    }
    _allBlogsMeta {
      count
    }
  }
`;

async function getBlogPosts(limit = 10) {
  const data = await datoCMSFetch<AllBlogsQueryResponse>(ALL_BLOGS_QUERY, {
    variables: { limit },
    revalidate: 300,
  });

  // Handle case when DATOCMS_API_TOKEN is not set or API returns empty data
  if (!data || !data.allBlogs || !Array.isArray(data.allBlogs)) {
    return [];
  }

  const publishedPosts = data.allBlogs.filter(post => post._status === "published" || !post._status);

  return publishedPosts.map<BlogPost>(post => {
    const categories = extractCategories(post.categories);
    const readTime = estimateReadTime(post.body);

    return {
      slug: post.seoSlug,
      title: post.title,
      excerpt: post.summary ?? post.body?.slice(0, 180) ?? "Stay tuned for updates from the JourneyWell team.",
      categories,
      readTime,
      publishedAt: formatPublishDate(post.publishDate),
      author: post.author ?? undefined,
      featuredImage: post.featuredImage
        ? {
            url: post.featuredImage.url,
            alt: post.featuredImage.alt ?? post.title,
          }
        : undefined,
    };
  });
}

export const metadata: Metadata = {
  title: "JourneyWell Blog",
  description:
    "Insights, experiments, and frameworks from the JourneyWell team on building AI-enhanced product experiences.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts(12);

  if (posts.length === 0) {
    return (
      <div className="bg-[#0b0c1e] min-h-screen">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#15183a] via-[#0b0c1e] to-transparent opacity-90" />
          <div className="container-custom relative py-20 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium uppercase tracking-wide text-white/80">
                Journal
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Insights from the JourneyWell team
              </h1>
              <p className="mt-6 text-lg text-white/70 sm:text-xl">
                Deep dives, frameworks, and playbooks on crafting AI-enhanced product experiences with speed, empathy, and measurable outcomes.
              </p>
            </div>
          </div>
        </section>
        <section className="border-y border-white/10 bg-[#101230]">
          <div className="container-custom py-16 text-center text-white/70">
            No articles are published yet. Check back soon—we're gathering our latest insights.
          </div>
        </section>
      </div>
    );
  }

  const categories = [
    "All",
    ...Array.from(
      new Set(
        posts
          .flatMap(post => post.categories)
          .filter(Boolean),
      ),
    ),
  ];

  const featuredPost = posts[0];
  const additionalPosts = posts.slice(1);

  return (
    <div className="bg-[#0b0c1e] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#15183a] via-[#0b0c1e] to-transparent opacity-90" />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium uppercase tracking-wide text-white/80">
              Journal
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Insights from the JourneyWell team
            </h1>
            <p className="mt-6 text-lg text-white/70 sm:text-xl">
              Deep dives, frameworks, and playbooks on crafting AI-enhanced product experiences with speed, empathy, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-white/10 bg-[#101230]">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-white text-gray-900"
                    : "border border-white/15 bg-white/5 text-white/80 hover:border-white/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="border-b border-white/10 bg-[#0b0c1e]">
        <div className="container-custom py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/70">
                Featured
              </span>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-lg text-white/70">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span>{featuredPost.categories[0] ?? "Journal"}</span>
                {featuredPost.readTime ? (
                  <>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>{featuredPost.readTime}</span>
                  </>
                ) : null}
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>{featuredPost.publishedAt}</span>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c4ff61] transition-colors hover:text-white"
              >
                Read article →
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#202356] via-[#1a1c42] to-[#12132f] p-10 shadow-2xl">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#c4ff61]/20 blur-2xl" />
              <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-[#5b5fd8]/20 blur-2xl" />
              <div className="relative">
                <p className="text-base font-medium text-white/80">
                  "We believe the future of product design blends human intuition with AI-assisted craft. Every article shares the experiments, frameworks, and rituals that make it work in the real world."
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">JourneyWell Research Guild</p>
                  <p className="text-xs text-white/60">Volume 04 — 2025 Edition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#050615]">
        <div className="container-custom py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-3">
            {additionalPosts.map(post => (
              <article
                key={post.slug}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#101230] to-transparent p-8 transition-transform hover:-translate-y-2 hover:border-white/20"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/50">
                    <span>{post.categories[0] ?? "Journal"}</span>
                    {post.readTime ? (
                      <>
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <span>{post.readTime}</span>
                      </>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm text-white/70">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm text-white/60">
                  <span>{post.publishedAt}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#c4ff61]"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#202356] via-[#1a1c42] to-[#12132f] p-10 text-center">
            <div className="mx-auto max-w-2xl">
              <h4 className="text-2xl font-semibold text-white">Get the latest frameworks first</h4>
              <p className="mt-3 text-sm text-white/70">
                Join product leaders receiving monthly playbooks on AI-assisted design, growth loops, and experimentation rituals.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#c4ff61] focus:outline-none focus:ring-2 focus:ring-[#c4ff61]/40 sm:w-72"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#c4ff61] px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-white"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-white/40">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

