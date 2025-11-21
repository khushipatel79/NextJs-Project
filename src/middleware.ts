import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const session = request.cookies.get("session")?.value;

  const protectedPaths = ["/contact", "/server", "/client"];

  const isProtected = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/contact/:path*",
    "/server/:path*",
    "/client/:path*",
  ],
};
