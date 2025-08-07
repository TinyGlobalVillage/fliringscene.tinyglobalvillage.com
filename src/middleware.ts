// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    // rewrite so that "/" serves the /no page (with its metadata)
    return NextResponse.rewrite(new URL('/no', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/'] };
