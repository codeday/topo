import React, { useEffect, useRef, useState } from "react";

import useId from "@accessible/use-id";
import { forwardRef } from "@chakra-ui/react";

import Text, { TextProps } from "./Text";

interface CopyTextProps extends TextProps {
  label: string;
}

const CopyText = forwardRef<CopyTextProps, "p">(
  ({ children, label, ...props }, ref) => {
    const [width, setWidth] = useState(10);
    const myRef = ref || useRef(null);
    const id = useId();
    useEffect(() => {
      if (
        typeof window === "undefined" ||
        !myRef ||
        !(myRef as React.MutableRefObject<any>).current
      )
        return;
      setWidth((myRef as React.MutableRefObject<any>).current.scrollWidth);
    }, [typeof window, myRef, children]);

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <Text
          {...props}
          ref={myRef as React.MutableRefObject<any>}
          id={id}
          as="input"
          type="text"
          value={children as string}
          width={`${width}px`}
          bg="transparent"
          readOnly
          onClick={(e) => {
            (e.target as HTMLInputElement).select();
            (e.target as HTMLInputElement).setSelectionRange(
              0,
              (e.target as HTMLInputElement).value.length + 1
            );
            // eslint-disable-next-line no-undef
            window.document.execCommand("copy");
          }}
        />
      </>
    );
  }
);
CopyText.displayName = "CopyText";
export default CopyText;
