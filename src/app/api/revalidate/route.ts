import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

type DatoCMSWebhookEntity = {
  seoSlug?: string | null;
};

type DatoCMSWebhookBody = {
  entity?: DatoCMSWebhookEntity;
  entity_type?: string;
  event_type?: string;
  payload?: {
    data?: {
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

  const slug =
    body?.entity?.seoSlug ??
    body?.payload?.data?.seoSlug ??
    request.nextUrl.searchParams.get("slug") ??
    undefined;

  const revalidatedPaths = new Set<string>(["/blog"]);

  if (slug) {
    revalidatedPaths.add(`/blog/${slug}`);
  }

  await Promise.all(Array.from(revalidatedPaths).map(path => revalidatePath(path)));

  return NextResponse.json({
    revalidated: true,
    paths: Array.from(revalidatedPaths),
    message: slug ? `Revalidated blog index and slug "${slug}".` : "Revalidated blog index.",
  });
}


