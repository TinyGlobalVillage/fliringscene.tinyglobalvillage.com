// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect / to /en/
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en/', request.url));
  }

  return NextResponse.next();
}
