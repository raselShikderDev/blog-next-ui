
// // Next.js middleware
// import { NextResponse, NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))

// }
 
// export const config = {
//   matcher: ['/about']
// }



/// // middlare from the auth.js
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }