import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // Redirect from root to default locale `/no`
  if (pathname === '/') {
    return NextResponse.redirect(`${origin}/no`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Match only the root path
};
