import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import {
  type ComponentWithAs,
  forwardRef,
  type ButtonProps,
} from "@chakra-ui/react";
import { Button } from "topo/Atom";

type ButtonAsLinkProps = ButtonProps &
  Omit<NextLinkProps, "passHref" | "legacyBehavior">;

export const NextButton: ComponentWithAs<"button", ButtonAsLinkProps> =
  forwardRef<ButtonAsLinkProps, "button">(({ as, ...props }, ref) => {
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
          passHref
          legacyBehavior
        >
          <Button as={as} ref={ref} {...boxProps} />
        </NextLink>
      );
    }
    return <Button as={as} {...props} />;
  });
