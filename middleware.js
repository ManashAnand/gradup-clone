import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export default async function middleware(request) {
  const cookies = request.cookies.get('next-auth.session-token')

  if (!cookies) {
    return NextResponse.redirect(new URL('/loginuser', request.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/mycourses',
    '/mycourses/:path*',
    '/internships',
    '/jobs',
    '/cart',
  ],
}
