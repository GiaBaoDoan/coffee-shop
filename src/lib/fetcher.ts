// src/lib/fetcher.ts
export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const message = `Fetch failed: ${res.status} ${res.statusText}`;
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}
