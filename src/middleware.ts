// src/middleware.ts
import { NextResponse } from 'next/server';
export function middleware(req: Request) {
  const url = new URL(req.url);
  if (url.pathname === '/') return NextResponse.rewrite(new URL('/no', url));
  return NextResponse.next();
}
export const config = { matcher: ['/'] };
