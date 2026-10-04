import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

let locales = ['az','en']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 1. Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // 2. Redirect if there is no locale (e.g., redirect /home to /en/home)
  if (pathnameIsMissingLocale) {
    const locale = 'en' // Default or detected from headers
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  // Skip internal paths (_next) and static files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}