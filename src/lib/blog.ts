export function formatPublishDate(value: string | null | undefined) {
  if (!value) {
    return "Coming soon";
  }

  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export function extractCategories(value: string | string[] | null | undefined) {
  if (!value) {
    return [];
  }

  const list = Array.isArray(value) ? value : value.split(",");

  return list
    .map(category => (typeof category === "string" ? category.trim() : ""))
    .filter(Boolean);
}

export function estimateReadTime(body: string | null | undefined) {
  if (!body) {
    return undefined;
  }

  const wordCount = body.trim().split(/\s+/).length;
  if (!wordCount) {
    return undefined;
  }

  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

export type BodySection = {
  id: string;
  heading?: string;
  paragraphs: string[];
};

export function slugifyHeading(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function deriveTableOfContents(body: string | null | undefined) {
  if (!body) {
    return [];
  }

  const headingRegex = /^##\s+(.+)/gm;
  const items: Array<{ id: string; title: string }> = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(body)) !== null) {
    const title = match[1].trim();
    const id = slugifyHeading(title);

    if (title) {
      items.push({ id, title });
    }
  }

  return items;
}

export function parseBodyToSections(body: string | null | undefined) {
  if (!body) {
    return [];
  }

  const normalized = body.replace(/\r\n/g, "\n").trim();
  if (!normalized) {
    return [];
  }

  const parts = normalized.split(/\n(?=##\s)/);
  const sections: BodySection[] = [];

  parts.forEach((part, index) => {
    const lines = part.split("\n");
    let heading: string | undefined;
    let contentStartIndex = 0;

    if (lines[0]?.startsWith("## ")) {
      heading = lines[0].replace(/^##\s+/, "").trim();
      contentStartIndex = 1;
    }

    const content = lines.slice(contentStartIndex).join("\n");
    const paragraphs = content
      .split(/\n\n+/)
      .map(paragraph => paragraph.trim())
      .filter(Boolean);

    if (!heading && paragraphs.length === 0) {
      return;
    }

    const id = heading ? slugifyHeading(heading) : index === 0 ? "introduction" : `section-${index + 1}`;

    sections.push({
      id,
      heading,
      paragraphs,
    });
  });

  return sections;
}



