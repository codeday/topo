import * as React from "react";

function SvgClear(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
  svgRef: React.LegacyRef<SVGSVGElement> | undefined
) {
  return (
    <svg viewBox="0 0 1000 1000" height="1em" ref={svgRef} {...props}>
      <path
        d="M500 978c264 0 478-214 478-478S764 22 500 22 22 236 22 500s214 478 478 478z"
        fill="currentColor"
      />
      <path
        d="M502 626c-141 0-238.53-72.73-274.16-104.34a30.26 30.26 0 0140.26-45.18c30.45 27 113.64 89.11 234.07 89.11h5.08c118-1.73 199.4-62.85 228.91-89.07a30.26 30.26 0 0121.84-7.61 30.25 30.25 0 0118.4 52.79C741.84 552.39 646.49 624 508.25 626z"
        fill="#fff"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgClear);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
