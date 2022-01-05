import * as React from "react";

function SvgCodecupText(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4314.78 1050.35"
      height="1em"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style>{".codecup-text_svg__a{fill:currentColor}"}</style>
      </defs>
      <path
        className="codecup-text_svg__a"
        d="M2574.1 453.61c0-204.35 154.5-343.91 348.9-343.91 151.51 0 236.25 79.74 283.1 162.48L3084.49 332c-27.92-53.82-87.73-96.68-161.49-96.68-115.64 0-203.37 92.7-203.37 218.3s87.73 218.3 203.37 218.3c73.76 0 133.57-41.86 161.49-96.7L3206.1 634c-47.85 82.74-131.59 163.49-283.1 163.49-194.4.03-348.9-139.49-348.9-343.88zM3581.23 724.75c-32.89 36.88-90.72 72.77-169.47 72.77-105.66 0-155.5-57.81-155.5-151.52V304.08h126.6v292.08c0 66.79 34.89 88.72 88.71 88.72 48.85 0 87.73-26.92 109.66-54.82v-326h126.6v481.5h-126.6zM3791.32 969V304.08h126.6v60.81c36.89-46.85 89.72-72.77 148.53-72.77 123.61 0 213.33 91.71 213.33 252.2s-89.72 253.2-213.33 253.2c-56.81 0-109.65-23.92-148.53-73.76V969zm235.27-564.21c-40.88 0-87.73 23.92-108.67 54.82v170.45c20.94 29.9 67.79 54.82 108.67 54.82 72.76 0 121.61-56.82 121.61-140.56 0-82.74-48.85-139.55-121.61-139.55zM295.17 462.91c0-204.07 154.3-343.43 353.39-343.43 146.33 0 231 79.64 277.73 162.26l-121.44 59.73c-27.87-53.76-87.61-96.56-156.29-96.56-120.46 0-208 92.57-208 218s87.59 218 208 218c68.68 0 128.42-41.81 156.29-96.56l121.44 58.73c-47.78 82.63-131.4 163.26-277.73 163.26-199.09 0-353.39-139.34-353.39-343.43zM943.48 553.5c0-136.38 95.56-251.86 253.84-251.86 159.26 0 254.83 115.48 254.83 251.86 0 137.37-95.57 252.84-254.83 252.84-158.32 0-253.84-115.47-253.84-252.84zm377.27 0c0-74.67-44.8-139.37-123.43-139.37s-122.45 64.7-122.45 139.37c0 75.65 43.8 140.35 122.45 140.35s123.43-64.7 123.43-140.35zM1842.63 794.39v-61.71c-37.83 47.78-90.59 73.66-148.33 73.66-121.45 0-213-91.59-213-251.85 0-157.28 90.59-252.85 213-252.85 56.75 0 110.5 24.89 148.33 73.67V130.43h127.42v664zm0-155.29V468.88c-20.91-31.85-66.7-54.75-109.5-54.75-71.67 0-121.45 56.74-121.45 140.36 0 82.63 49.78 139.36 121.45 139.36 42.8 0 88.59-22.85 109.5-54.75zM2017.39 553.5c0-139.37 102.53-251.86 248.86-251.86 143.35 0 240.91 107.52 240.91 264.8v27.87h-357.37c8 60.72 56.74 111.49 138.37 111.49 40.81 0 97.55-17.92 128.41-47.78l55.75 81.62c-47.79 43.8-123.44 66.7-198.1 66.7-146.34 0-256.83-98.55-256.83-252.84zm248.86-151.31c-78.63 0-112.47 58.73-118.46 106.51h236.92c-2.99-45.79-34.84-106.51-118.46-106.51z"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCodecupText);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
