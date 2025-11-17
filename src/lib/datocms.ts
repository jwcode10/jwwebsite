const DATOCMS_BASE_ENDPOINT = "https://graphql.datocms.com/";
const DATOCMS_PREVIEW_ENDPOINT = "https://graphql.datocms.com/preview";

type FetchOptions = {
  variables?: Record<string, unknown>;
  preview?: boolean;
  revalidate?: number;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

export async function datoCMSFetch<T = unknown>(
  query: string,
  { variables, preview = false, revalidate = 0 }: FetchOptions = {}, // Default to 0 for on-demand revalidation
): Promise<T> {
  const apiToken = process.env.DATOCMS_API_TOKEN;

  if (!apiToken) {
    // Return empty/default response instead of throwing to prevent site crash
    console.warn("DATOCMS_API_TOKEN is not set. Returning empty data. Please add DATOCMS_API_TOKEN to your .env.local file.");
    return {} as T;
  }

  try {
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(preview ? DATOCMS_PREVIEW_ENDPOINT : DATOCMS_BASE_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      signal: controller.signal,
      next: {
        revalidate,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`DatoCMS request failed: ${response.status} ${response.statusText}`);
      // Return empty object instead of throwing to prevent server crash
      return {} as T;
    }

    const json = (await response.json()) as GraphQLResponse<T>;

    if (json.errors && json.errors.length > 0) {
      const messages = json.errors.map(error => error.message).join("\n");
      console.error(`DatoCMS returned errors:\n${messages}`);
      // Return empty object instead of throwing to prevent server crash
      return {} as T;
    }

    if (!json.data) {
      console.error("DatoCMS response did not include data.");
      // Return empty object instead of throwing to prevent server crash
      return {} as T;
    }

    return json.data;
  } catch (error) {
    // Catch any network errors or other exceptions to prevent server crash
    if (error instanceof Error && error.name === 'AbortError') {
      console.error("DatoCMS fetch timeout: Request took longer than 10 seconds");
    } else {
      console.error("DatoCMS fetch error:", error instanceof Error ? error.message : String(error));
    }
    // Return empty object instead of throwing to prevent server crash
    return {} as T;
  }
}



