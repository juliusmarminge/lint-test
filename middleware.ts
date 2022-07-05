import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
  /*onst url = request.nextUrl.clone();
  url.pathname = "/dest";
  return NextResponse.rewrite(url);*/
}
