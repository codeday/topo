import { forwardRef } from "@chakra-ui/react";
import ArrowLeft from "@codeday/topocons/Icon/UiArrowLeft";
import ArrowRight from "@codeday/topocons/Icon/UiArrowRight";
import Download from "@codeday/topocons/Icon/UiDownload";
import PropTypes from "prop-types";
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo, useRef, useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
import { Box, Button, SizeBox, Spinner } from "topo/Atom";
import { useTheme } from "topo/utils";

let Document: any;
let Page: any;
let pdfjs: any;
try {
  ({ Document, Page, pdfjs } = require("react-pdf"));
  // eslint-disable-next-line no-empty
} catch (ex) {}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface DeckProps {
  src: string;
  allowDownload?: boolean;
}

const Deck = forwardRef<DeckProps, "div">(({ src, allowDownload }, ref) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const myRef = ref || useRef();
  const theme = useTheme();

  const loading = useMemo(
    () => (
      <Box textAlign="center">
        <Spinner />
      </Box>
    ),
    []
  );
  const navigate = (amount: number) =>
    setPageNumber(
      Math.min(Number(totalPages), Math.max(1, amount + pageNumber))
    );
  const filter = "drop-shadow( 0 0 1px rgba(0, 0, 0, .7))";

  // This will throw an error server-side.
  if (typeof window === "undefined") return <></>;

  // react-pdf is an optional dependency.
  if (typeof pdfjs === "undefined") {
    return (
      <Box bg="red.500" color="white" fontWeight="bold" p={2}>
        Optional dependency react-pdf must be installed to use Deck.
      </Box>
    );
  }

  return (
    <Box position="relative">
      <SizeBox
        onWidthChanged={((e: any) => setWidth(e)) as () => null}
        borderWidth="1px"
        borderColor="gray.100"
        borderRadius={
          allowDownload
            ? `${theme.radii.md} ${theme.radii.md} 0 ${theme.radii.md}`
            : "md"
        }
        aria-hidden
      >
        <Document
          file={src}
          inputRef={myRef}
          loading={loading}
          onLoadSuccess={({ numPages }: any) => setTotalPages(numPages)}
          // TODO: didnt work here so i moved it to the Page element below, not sure if its gonna work
          // onClick={() => setPageNumber(pageNumber + 1)}
        >
          {totalPages &&
            [...Array(totalPages).keys()].map((number) => (
              <Box
                display={number + 1 === pageNumber ? "block" : "none"}
                aria-hidden={number + 1 !== pageNumber}
              >
                <Page
                  onClick={() => setPageNumber(pageNumber + 1)}
                  loading={loading}
                  width={width - 2}
                  pageNumber={number + 1}
                  onRenderSuccess={() =>
                    setHeight(
                      (myRef as React.MutableRefObject<any>).current
                        .offsetHeight
                    )
                  }
                />
              </Box>
            ))}
        </Document>
      </SizeBox>
      {totalPages && (
        <Box
          height={`${height}px`}
          width={`${width}px`}
          display="block"
          cursor="pointer"
          position="absolute"
          zIndex="1000"
          top="0"
          marginBottom={0}
        >
          <Box
            width="40%"
            height="100%"
            display="inline-block"
            textAlign="right"
            color="white"
            position="relative"
            onClick={() => navigate(-1)}
          >
            {pageNumber > 1 && (
              <ArrowLeft
                aria-placeholder="Previous Slide"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0.5rem",
                  filter,
                  fill: "white",
                }}
              />
            )}
          </Box>
          <Box
            width="60%"
            height="100%"
            display="inline-block"
            color="white"
            onClick={() => navigate(1)}
          >
            {pageNumber < totalPages && (
              <ArrowRight
                aria-placeholder="Next Slide"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0.5rem",
                  filter,
                  fill: "white",
                }}
              />
            )}
          </Box>
        </Box>
      )}
      <Box
        textAlign="right"
        style={
          allowDownload
            ? {}
            : {
                position: "absolute",
                left: "-99999px" /* needed for screen readers */,
              }
        }
      >
        <Button
          size="sm"
          variant="outline"
          as="a"
          href={src}
          target="_blank"
          borderRadius={`0 0 ${theme.radii.md} ${theme.radii.md}`}
          borderTop="none"
          color="gray.600"
        >
          <Download />
          &nbsp;Download PDF
        </Button>
      </Box>
    </Box>
  );
});
Deck.propTypes = {
  src: PropTypes.string.isRequired,
  allowDownload: PropTypes.bool,
};
Deck.defaultProps = {
  allowDownload: false,
};
export { Deck, DeckProps };
