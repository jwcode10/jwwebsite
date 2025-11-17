import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { SocialShare } from "@/components/blog/social-share";
import { AuthorInfo } from "@/components/blog/author-info";
import { datoCMSFetch } from "@/lib/datocms";
import {
  BodySection,
  deriveTableOfContents,
  extractCategories,
  estimateReadTime,
  formatPublishDate,
  parseBodyToSections,
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

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  formattedDate: string;
  readTime?: string;
  author?: string;
  categories: string[];
  featuredImage?: {
    url: string;
    alt?: string;
  };
  sections: BodySection[];
};

type BlogBySlugQueryResponse = {
  blog: RawDatoBlogPost | null;
};

const BLOG_BY_SLUG_QUERY = `
  query BlogBySlug($slug: String!) {
    blog(filter: { seoSlug: { eq: $slug } }) {
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
  }
`;

const ALL_BLOG_SLUGS_QUERY = `
  query AllBlogSlugs {
    allBlogs(orderBy: publishDate_DESC) {
      seoSlug
      _status
    }
  }
`;

async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const data = await datoCMSFetch<BlogBySlugQueryResponse>(BLOG_BY_SLUG_QUERY, {
      variables: { slug },
      revalidate: 0, // On-demand revalidation via webhook
    });

    // Handle case when DATOCMS_API_TOKEN is not set or API returns empty data
    if (!data || !data.blog) {
      return null;
    }

    const record = data.blog;

    if (!record || (record._status && record._status !== "published")) {
      return null;
    }

    const sections = parseBodyToSections(record.body);

    return {
      slug: record.seoSlug,
      title: record.title,
      summary: record.summary ?? record.body?.slice(0, 160) ?? "",
      body: record.body ?? "",
      formattedDate: formatPublishDate(record.publishDate),
      readTime: estimateReadTime(record.body),
      author: record.author ?? undefined,
      categories: extractCategories(record.categories),
      featuredImage: record.featuredImage
        ? {
            url: record.featuredImage.url,
            alt: record.featuredImage.alt ?? record.title,
          }
        : undefined,
      sections,
    };
  } catch (error) {
    // Prevent server crash if anything goes wrong
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      return {
        title: "Post Not Found",
      };
    }

    return {
      title: post.title,
      description: post.summary,
    };
  } catch (error) {
    // Prevent server crash if metadata generation fails
    console.error("Error generating metadata:", error);
    return {
      title: "JourneyWell Blog",
      description: "Blog post from JourneyWell",
    };
  }
}

// Force dynamic rendering for immediate updates
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const tocItems = deriveTableOfContents(post.body);
  const hasToc = tocItems.length > 0;

  return (
    <div className="bg-[#f5f1e8] min-h-screen">
      <article className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-gray-600">
              {post.formattedDate}
              {post.readTime ? ` • ${post.readTime}` : ""}
            </p>

            <h1 className="mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
              <span className="font-heading font-medium text-gray-900">{post.title}</span>
            </h1>

            {post.summary ? (
              <p className="mx-auto mb-10 max-w-2xl text-base text-gray-600 md:text-lg">
                {post.summary}
              </p>
            ) : null}

            {post.author ? (
              <div className="mb-8 flex items-center justify-center gap-6">
                <AuthorInfo name={post.author} role="" />
              </div>
            ) : null}

            <div className="flex justify-center">
              <SocialShare title={post.title} />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Table of Contents - Left Sidebar */}
            {hasToc ? (
              <aside className="hidden lg:col-span-3 lg:block">
                <TableOfContents items={tocItems} />
              </aside>
            ) : (
              <div className="hidden lg:col-span-3 lg:block" />
            )}

            {/* Article Content */}
            <div className="lg:col-span-6 space-y-10">
              {post.featuredImage ? (
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt ?? post.title}
                    width={1200}
                    height={675}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              ) : null}

              {post.sections.length
                ? post.sections.map(section => (
                    <section key={section.id} id={section.id} className="scroll-mt-24">
                      {section.heading ? (
                        <h2 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl">
                          {section.heading}
                        </h2>
                      ) : null}
                      <div className="prose prose-lg max-w-none text-gray-800">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={`${section.id}-${paragraphIndex}`} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))
                : null}

              {!post.sections.length && post.body ? (
                <div className="prose prose-lg max-w-none text-gray-800">
                  {post.body.split(/\n\n+/).map((paragraph, paragraphIndex) => (
                    <p key={`paragraph-${paragraphIndex}`} className="leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              ) : null}

              {/* Social Share Bottom */}
              <div className="border-t border-gray-300 pt-8">
                <p className="mb-4 text-sm text-gray-600">Share this article</p>
                <SocialShare title={post.title} />
              </div>
            </div>

            {/* Right Sidebar - CTA Card */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-8 rounded-lg bg-gray-900 p-6 text-white">
                <div className="mb-4">
                  <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-gray-800">
                    <span className="text-sm text-gray-400">Image</span>
                  </div>
                </div>
                <p className="mb-4 text-lg font-medium">Need Quality Design at Scale?</p>
                <p className="mb-6 text-sm text-gray-300">
                  JourneyWell can help. Let's chat about how we work.
                </p>
                <button className="w-full rounded-full bg-[#d4ff00] py-3 font-medium text-gray-900 transition-colors hover:bg-[#c0e600]">
                  Book a call
                </button>
              </div>
            </aside>
          </div>

          {/* Mobile TOC */}
          {hasToc ? (
            <div className="mx-auto mt-12 max-w-4xl lg:hidden">
              <TableOfContents items={tocItems} />
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const data = await datoCMSFetch<{
      allBlogs: Array<{ seoSlug: string; _status?: string | null }>;
    }>(ALL_BLOG_SLUGS_QUERY, { revalidate: 0 }); // On-demand revalidation via webhook

    // Handle case when DATOCMS_API_TOKEN is not set or API returns empty data
    if (!data || !data.allBlogs || !Array.isArray(data.allBlogs)) {
      return [];
    }

    return data.allBlogs
      .filter(post => post._status === "published" || !post._status)
      .map(post => ({
        slug: post.seoSlug,
      }));
  } catch (error) {
    // Prevent server crash if anything goes wrong during static params generation
    console.error("Error generating static params:", error);
    return [];
  }
}

