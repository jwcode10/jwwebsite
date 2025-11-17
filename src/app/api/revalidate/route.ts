import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

type DatoCMSWebhookEntity = {
  seoSlug?: string | null;
  id?: string;
};

type DatoCMSWebhookBody = {
  entity?: DatoCMSWebhookEntity;
  entity_type?: string;
  event_type?: "create" | "update" | "delete" | "publish" | "unpublish";
  payload?: {
    data?: {
      seoSlug?: string | null;
      id?: string;
    };
    previous?: {
      seoSlug?: string | null;
    };
  };
};

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-webhook-secret") ?? request.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret) {
    return NextResponse.json(
      { revalidated: false, message: "REVALIDATE_SECRET is not configured on the server." },
      { status: 500 },
    );
  }

  if (!secret || secret !== expectedSecret) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret." }, { status: 401 });
  }

  let body: DatoCMSWebhookBody | null = null;

  try {
    body = (await request.json()) as DatoCMSWebhookBody;
  } catch {
    // Ignore JSON parse errors, we'll handle missing body below.
  }

  // Extract slug from various possible locations in the webhook payload
  const slug =
    body?.entity?.seoSlug ??
    body?.payload?.data?.seoSlug ??
    body?.payload?.previous?.seoSlug ??
    request.nextUrl.searchParams.get("slug") ??
    undefined;

  const eventType = body?.event_type;
  const entityType = body?.entity_type;

  // Always revalidate the blog index page
  const revalidatedPaths = new Set<string>(["/blog"]);

  // If we have a slug, revalidate that specific blog post
  if (slug) {
    revalidatedPaths.add(`/blog/${slug}`);
  }

  // Revalidate all blog-related paths
  // This ensures that when a blog is created, updated, published, or unpublished,
  // both the index and the specific post are revalidated
  try {
    await Promise.all([
      // Revalidate all paths
      ...Array.from(revalidatedPaths).map(path => revalidatePath(path)),
      // Also revalidate tags for more comprehensive cache invalidation
      revalidateTag("blog"),
      revalidateTag("blog-list"),
    ]);

    return NextResponse.json({
      revalidated: true,
      paths: Array.from(revalidatedPaths),
      eventType,
      entityType,
      slug: slug || null,
      message: slug
        ? `Revalidated blog index and post "${slug}" (${eventType || "unknown event"}).`
        : `Revalidated blog index (${eventType || "unknown event"}).`,
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      {
        revalidated: false,
        error: error instanceof Error ? error.message : "Unknown error",
        paths: Array.from(revalidatedPaths),
      },
      { status: 500 },
    );
  }
}


