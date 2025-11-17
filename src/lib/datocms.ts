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
  { variables, preview = false, revalidate = 300 }: FetchOptions = {},
): Promise<T> {
  const apiToken = process.env.DATOCMS_API_TOKEN;

  if (!apiToken) {
    // Return empty/default response instead of throwing to prevent site crash
    console.warn("DATOCMS_API_TOKEN is not set. Returning empty data. Please add DATOCMS_API_TOKEN to your .env.local file.");
    return {} as T;
  }

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
    next: {
      revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(`DatoCMS request failed: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as GraphQLResponse<T>;

  if (json.errors && json.errors.length > 0) {
    const messages = json.errors.map(error => error.message).join("\n");
    throw new Error(`DatoCMS returned errors:\n${messages}`);
  }

  if (!json.data) {
    throw new Error("DatoCMS response did not include data.");
  }

  return json.data;
}



