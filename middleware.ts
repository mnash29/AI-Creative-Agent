import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Protected routes
const isProtectedRoute = createRouteMatcher(["/video(.*)"])

export default clerkMiddleware(async (auth, request) => {
  const { userId, redirectToSignIn } = await auth();

  // Redirect to signin page if not authenticated on protected route
  if (!userId && isProtectedRoute(request)) {
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};