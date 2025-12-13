// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Lấy full URL hiện tại
  const currentUrl = req.nextUrl.href;

  // Tạo response tiếp tục (không chặn request)
  const res = NextResponse.next();

  // Gắn URL vào header để server component có thể đọc
  res.headers.set("x-current-url", currentUrl);

  return res;
}
