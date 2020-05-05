import * as React from "react";

function SvgCsfest(props, svgRef) {
  return (
    <svg viewBox="0 0 1000 1000" height="1em" ref={svgRef} {...props}>
      <defs>
        <style>{".csfest_svg__a{fill:currentColor}"}</style>
      </defs>
      <path
        className="csfest_svg__a"
        d="M353.56 635.56a28.15 28.15 0 01-16-5L183.1 524.66a30 30 0 010-49.63L337.56 369.1a28.33 28.33 0 1132 46.66l-122.5 84.1 122.5 84a28.33 28.33 0 01-16 51.7zM422.36 636.46a28 28 0 01-14.9-4.27 28.33 28.33 0 01-9.17-39L532 377.53a28.37 28.37 0 1148.16 30l-133.7 215.66a28.34 28.34 0 01-24.1 13.27zM627.05 635.56a28.33 28.33 0 01-16.05-51.7l122.53-84L611 415.83a28.34 28.34 0 0121.82-51.5 28.59 28.59 0 0110.25 4.83L797.52 475.1a30 30 0 010 49.63L643.06 630.66a28.14 28.14 0 01-16.01 4.9z"
      />
      <path
        className="csfest_svg__a"
        d="M787.46 868c-93 0-203.85-22.25-312.62-44.13-52.34-10.5-106.47-21.13-156.09-29.16-7.57-1.24-17.44-9.47-13.62-37.17 3.32-25.27 12.09-34.74 29.89-32.64 49.09 5.68 101.4 18.23 152.24 28.46 159.22 32 338.76 68.08 411.82 12V274.14c-98.9 26.4-227.64-.34-363-28.44-165.08-34.27-335.66-69.7-435.16.8v481.64c18.83-7.86 39.39-12.47 66.88-14.85 12.61-1.1 16.25 10.77 17.59 30.3 1.07 15.65-3.85 36.31-26.75 40.12-35.08 5.76-54.11 9.5-86.94 31.37a31.74 31.74 0 01-48.86-26.35V206.4l11.07-9.23C158.41 93.64 357.54 135 550.1 174.94c150.33 31.2 292.33 60.66 380.76 19.23a32.51 32.51 0 0146.3 29.4V802.9l-9 9C926.74 853.31 863 868 787.46 868z"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCsfest);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;