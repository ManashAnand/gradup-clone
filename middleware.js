import { NextResponse } from 'next/server'

export default async function middleware(request) {
   const cookies = request.cookies.get('__Secure-next-auth.session-token')
  //const cookies = request.cookies.get('next-auth.session-token')

  if (!cookies) {
    return NextResponse.redirect(new URL('/loginuser', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/mycourses',
    '/mycourses/:path*',
    '/internships',
    '/jobs',
    '/cart',
    '/hr/signup',
  ],
}
