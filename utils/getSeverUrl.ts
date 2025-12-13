import { headers } from "next/headers";

export async function getCurrentPath(): Promise<string> {
  const fullUrl = (await headers()).get("x-current-url");
  if (!fullUrl) return "/";

  try {
    const url = new URL(fullUrl);
    return url.pathname; // chỉ lấy /something, bỏ host, protocol, query
  } catch {
    return "/";
  }
}
