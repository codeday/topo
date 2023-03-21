import { type ComponentWithAs, forwardRef } from "@chakra-ui/react";
import { Box, type BoxProps } from "topo/Atom";
import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

type BoxAsLinkProps = BoxProps &
  Omit<NextLinkProps, "passHref" | "legacyBehavior">;

export const NextBox: ComponentWithAs<"div", BoxAsLinkProps> = forwardRef<
  BoxAsLinkProps,
  "div"
>(({ as, ...props }, ref) => {
  if (as == "a") {
    const {
      href = "",
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      ...boxProps
    } = props;
    return (
      <NextLink
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
        legacyBehavior
        passHref
      >
        <Box as={as} ref={ref} {...boxProps} />
      </NextLink>
    );
  }
  return <Box as={as} {...props} />;
});
