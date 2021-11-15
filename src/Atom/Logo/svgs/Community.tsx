import * as React from "react";

function SvgCommunity(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>, svgRef: React.LegacyRef<SVGSVGElement> | undefined) {
  return (
    <svg viewBox="0 0 1000 1000" height="1em" ref={svgRef} {...props}>
      <path
        d="M500 978c264 0 478-214 478-478S764 22 500 22 22 236 22 500s214 478 478 478z"
        fill="currentColor"
      />
      <path
        d="M245.82 786.86A37.3 37.3 0 01208.66 750v-65.7s1.27-7.3 2.63-10.7a27.73 27.73 0 0114.92-15.26c3.37-1.44 7-2.19 10.65-3.92h.24c7.33 1.69 14.36 4.59 19.56 9.75a28.58 28.58 0 018.34 19.49v29.27l49.34-38.62c18.47-14.58 64.79-23.92 64.79-23.92l345.39-3a28.15 28.15 0 0027.7-28.13l-2.62-303.63a28.16 28.16 0 00-22.23-27.14A24 24 0 00722 288h-.61l-433.83 3.54a27 27 0 00-19.56 8.38 25.26 25.26 0 00-7 18.65v.92l2.26 262.38a28.18 28.18 0 01-7.77 19.87 27.48 27.48 0 01-8.83 6.16 26.8 26.8 0 01-10.47 2.22h-.08A26 26 0 01228 609a27.93 27.93 0 01-19.37-26.47l-2.3-262a82 82 0 015-31.77 80.67 80.67 0 0116.76-27.25 81.75 81.75 0 0126.65-19 80.23 80.23 0 0131.79-6.89l433.71-3.79a83.49 83.49 0 0184.37 82.72l2.61 304a83.47 83.47 0 01-82.56 84.17l-346.49 3a50.34 50.34 0 00-30.73 10.87l-78.64 62.19a36.87 36.87 0 01-22.98 8.08z"
        fill="#fff"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCommunity);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
