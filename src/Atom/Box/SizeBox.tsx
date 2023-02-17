/* eslint-disable no-undef */
import React, { useRef, useEffect, useState, useMemo } from "react";
import { debounce } from "topo/_utils";
import { Box, BoxProps } from "topo/Atom";
import {ComponentWithAs, forwardRef } from "@chakra-ui/react";

export interface SizeBoxProps extends BoxProps {
  onWidthChanged?: (width: any) => null;
  onHeightChanged?: (height: any) => null;
  onSizeChanged?: (width: any, height: any) => null;
}

export const SizeBox: ComponentWithAs<"div", SizeBoxProps> = forwardRef<SizeBoxProps, "div">(
  (
    {
      onWidthChanged = () => {},
      onHeightChanged = () => {},
      onSizeChanged = () => {},
      ...props
    },
    ref
  ) => {
    // const boxRef = useRef<Element | null>(null);
    const boxRef: React.MutableRefObject<any> = useRef(null);
    const [lastWidth, setLastWidth] = useState();
    const [lastHeight, setLastHeight] = useState();

    const changeSize = () => {
      if (!boxRef.current) return;
      const { offsetWidth: width, offsetHeight: height } = boxRef.current;
      if (lastWidth !== width) {
        onWidthChanged(width);
        onSizeChanged(width, height);
        setLastWidth(width);
        setLastHeight(height);
      } else if (lastHeight !== height) {
        onHeightChanged(height);
        onSizeChanged(width, height);
        setLastWidth(width);
        setLastHeight(height);
      }
    };
    const windowChangeSize = debounce(() => changeSize(), 200, false);

    useEffect(() => {
      changeSize();
    }, [ref, typeof window]);

    useEffect(() => {
      window.addEventListener("resize", windowChangeSize, false);
      return () => window.removeEventListener("resize", windowChangeSize);
    }, []);

    return useMemo(() => <Box ref={boxRef} {...props} />, [props]);
  }
);
