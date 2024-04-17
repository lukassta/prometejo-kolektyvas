import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  defaultLocale: "lt",
  locales,
  localePrefix,
  pathnames,
});

export const config = { matcher: ["/", "/(lt|en)/:path*"] };
