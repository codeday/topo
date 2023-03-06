import React, {
  useState,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from "react";
import { Box, type BoxProps } from "topo/Atom";
import { useSsr } from "topo/utils";
import {type ComponentWithAs, forwardRef} from "@chakra-ui/react";

export interface RatioBoxProps extends BoxProps {
  auto?: "w" | "h";
  autoDefault?: string;
}

const RatioBoxInner = forwardRef<RatioBoxProps, "div">(
  (
    { w, h, auto = "h", autoDefault = "100%", children, ...props },
    forwardedRef
  ) => {
    const ref = useRef(null);
    const [computed, setComputed] = useState<number | string>(autoDefault);

    useImperativeHandle(forwardedRef, () => ref.current);

    useLayoutEffect(() => {
      if (typeof window === "undefined" || !ref.current) return () => {};

      const refreshSize = () => {
        if (auto === "h") {
          setComputed(
            Math.floor(
              ((ref as React.MutableRefObject<any>).current.clientWidth /
                (w as number)) *
                (h as number)
            )
          );
        } else if (auto === "w") {
          setComputed(
            Math.floor(
              (ref as React.MutableRefObject<any>).current.clientHeight /
                (h as number)
            ) * (w as number)
          );
        }
      };

      refreshSize();
      window.addEventListener("resize", refreshSize);
      return () => window.removeEventListener("resize", refreshSize);
    }, [w, h, auto, ref.current, typeof window]);

    return (
      <Box
        {...props}
        ref={ref}
        width={auto === "w" ? computed : "100%"}
        height={auto === "h" ? computed : "100%"}
      >
        {children}
      </Box>
    );
  }
);

export const RatioBox: ComponentWithAs<"div", RatioBoxProps> = forwardRef<RatioBoxProps, "div">(
  ({ auto = "h", autoDefault = "100%", children, ...props }, ref) => {
    const ssr = useSsr();
    if (ssr) {
      return (
        <Box
          {...props}
          ref={ref}
          width={auto === "w" ? autoDefault : "100%"}
          height={auto === "h" ? autoDefault : "100%"}
        >
          {children}
        </Box>
      );
    }

    return (
      <RatioBoxInner {...props} auto={auto} ref={ref}>
        {children}
      </RatioBoxInner>
    );
  }
);
