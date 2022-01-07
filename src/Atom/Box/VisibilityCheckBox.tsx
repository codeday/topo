/* eslint-disable no-undef */
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
} from "react";
import { Box, BoxProps, ClientSideOnlyBox } from "topo/Atom";
import { forwardRef } from "@chakra-ui/react";

const VisibilityCheckBoxInner = forwardRef<BoxProps, "div">(
  ({ children, ...props }, forwardedRef) => {
    const ref: React.MutableRefObject<any> = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(forwardedRef, () => ref.current);

    const onResize = () =>
      setIsVisible(ref.current.offsetWidth > 0 || ref.current.offsetHeight > 0);
    useLayoutEffect(() => {
      if (typeof window === "undefined") return () => {};

      window.addEventListener("resize", onResize);
      onResize();
      return () => window.removeEventListener("resize", onResize);
    }, [ref, typeof window]);

    return (
      <Box {...props} ref={ref}>
        {isVisible && children}
      </Box>
    );
  }
);

// eslint-disable-next-line no-func-assign
// VisibilityCheckBoxInner = forwardRef(VisibilityCheckBoxInner);

// Wrapping this component with a check for client-side will prevent errors about useLayoutEffect on SSR
export const VisibilityCheckBox = forwardRef<BoxProps, "div">(
  ({ children, ...props }, ref) => {
    return (
      <ClientSideOnlyBox>
        <VisibilityCheckBoxInner ref={ref} {...props}>
          {children}
        </VisibilityCheckBoxInner>
      </ClientSideOnlyBox>
    );
  }
);
