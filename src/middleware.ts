// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/no';
    return NextResponse.redirect(url, 308); // permanent
  }
  return NextResponse.next();
}

export const config = { matcher: ['/'] };
