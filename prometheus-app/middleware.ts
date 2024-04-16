import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'lt'],
  defaultLocale: 'lt'
});
 
export const config = {
  matcher: ['/', '/(lt|en)/:path*']
};