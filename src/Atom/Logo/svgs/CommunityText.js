import * as React from "react";

function SvgCommunityText(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5308 1050.35"
      height="1em"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style>{".community-text_svg__a{fill:currentColor}"}</style>
      </defs>
      <path
        className="community-text_svg__a"
        d="M317.7 479c0-204.35 154.5-343.91 348.89-343.91 151.52 0 236.25 79.74 283.1 162.48l-121.61 59.78c-27.92-53.82-87.72-96.68-161.49-96.68-115.63 0-203.36 92.7-203.36 218.3S551 697.28 666.59 697.28c73.77 0 133.57-41.86 161.49-96.7l121.61 58.81c-47.84 82.74-131.58 163.49-283.1 163.49C472.2 822.88 317.7 683.32 317.7 479zM958.43 569.68c0-136.56 95.69-252.2 254.19-252.2 159.5 0 255.19 115.64 255.19 252.2 0 137.57-95.69 253.2-255.19 253.2-158.5 0-254.19-115.63-254.19-253.2zm377.8 0c0-74.76-44.86-139.55-123.61-139.55S1090 494.92 1090 569.68c0 75.76 43.86 140.56 122.61 140.56s123.62-64.8 123.62-140.56zM2106 506.88c0-44.85-19.93-76.75-71.77-76.75-44.86 0-81.74 29.9-99.68 55.82v325h-127.61v-304c0-44.85-20-76.75-71.78-76.75-43.87 0-80.75 29.9-99.69 56.81v324h-126.6V329.44h126.6v62.8c19.94-28.9 83.74-74.76 157.5-74.76 70.78 0 115.64 32.9 133.58 87.72 27.91-43.86 91.71-87.72 165.48-87.72 88.72 0 141.54 46.85 141.54 145.54v347.9H2106zM2923.71 506.88c0-44.85-19.93-76.75-71.77-76.75-44.85 0-81.74 29.9-99.67 55.82v325h-127.6v-304c0-44.85-20-76.75-71.78-76.75-43.87 0-80.74 29.9-99.68 56.81v324h-126.6V329.44h126.6v62.8c19.93-28.9 83.73-74.76 157.5-74.76 70.78 0 115.63 32.9 133.58 87.72 27.91-43.86 91.7-87.72 165.48-87.72 88.71 0 141.54 46.85 141.54 145.54v347.9h-127.6zM3458.77 750.11c-32.88 36.88-90.69 72.77-169.44 72.77-105.68 0-155.52-57.81-155.52-151.52V329.44h126.6v292.08c0 66.79 34.89 88.72 88.72 88.72 48.85 0 87.72-26.92 109.64-54.82v-326h126.61v481.5h-126.61zM3993.84 519.84c0-66.79-34.88-89.71-88.72-89.71-49.84 0-88.71 27.91-109.65 56.81v324h-126.6v-481.5h126.6v62.8c30.9-36.87 89.71-74.76 168.46-74.76 105.68 0 156.52 59.81 156.52 153.51v339.93h-126.61zM4201.51 182.9c0-41.86 34.89-75.75 75.76-75.75a75.76 75.76 0 110 151.52c-40.87 0-75.76-33.89-75.76-75.77zm13 146.54h126.6v481.48h-126.6zM4491.59 691.29v-251.2h-79.75V329.44h79.75V197.86h127.6v131.58h97.68v110.65h-97.68v217.32c0 29.9 15.94 52.83 43.86 52.83 18.94 0 36.88-7 43.86-14l26.91 95.7c-18.93 16.95-52.83 30.9-105.66 30.9-88.73.04-136.57-45.84-136.57-131.55zM4845.47 893.66c32.89 0 54.83-9 66.79-34.89l17.94-40.87-195.38-488.46h135.57L4996 664.38l125.6-334.94h136.57l-226.29 560.23c-35.89 90.71-99.68 114.64-182.42 116.63-15 0-46.85-3-62.8-7l18.94-113.64c10.96 5.01 27.91 8 39.87 8z"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCommunityText);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
