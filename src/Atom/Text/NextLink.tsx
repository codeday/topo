import React from "react";
import NextJsLink, { type LinkProps as NextLinkProps } from "next/link";
import { type LinkProps, forwardRef } from "@chakra-ui/react";
import { Link } from "./Link";

export const NextLink = forwardRef<LinkProps & NextLinkProps, "a">(({href, replace, scroll, shallow, prefetch, locale, children, ...props}, ref) => {
  return (
    <NextJsLink href={href} replace={replace} scroll={scroll} shallow={shallow} prefetch={prefetch} locale={locale} passHref legacyBehavior>
      <Link ref={ref} {...props}>{children}</Link>
    </NextJsLink>
    )
})