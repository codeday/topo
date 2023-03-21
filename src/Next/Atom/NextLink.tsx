import React from "react";
import NextJsLink, { type LinkProps as NextJsLinkProps } from "next/link";
import { type LinkProps, forwardRef } from "@chakra-ui/react";
import { Link } from "topo/Atom";

type NextLinkProps = LinkProps &
  Omit<NextJsLinkProps, "passHref" | "legacyBehavior">;

export const NextLink = forwardRef<NextLinkProps, "a">(
  (
    { href = "", replace, scroll, shallow, prefetch, locale, ...props },
    ref
  ) => {
    return (
      <NextJsLink
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
        passHref
        legacyBehavior
      >
        <Link ref={ref} {...props} />
      </NextJsLink>
    );
  }
);
