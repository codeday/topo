import React, {
  forwardRef, useState, useMemo, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from 'react-pdf';
import ArrowLeft from '@codeday/topocons/Icon/UiArrowLeft';
import ArrowRight from '@codeday/topocons/Icon/UiArrowRight';
import Download from '@codeday/topocons/Icon/UiDownload';
import Box, { SizeBox } from '../Box';
import Button from '../Button';
import Spinner from '../Spinner';
import { useTheme } from '../utils';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Deck = forwardRef(({ src, allowDownload }, ref) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const myRef = ref || useRef();
  const theme = useTheme();

  const loading = useMemo(() => <Box textAlign="center"><Spinner /></Box>, []);
  const navigate = (amount) => setPageNumber(Math.min(totalPages, Math.max(1, (amount + pageNumber))));
  const filter = 'drop-shadow( 0 0 1px rgba(0, 0, 0, .7))';

  // This will throw an error server-side.
  if (typeof window === 'undefined') return <></>;

  return (
    <Box position="relative">
      <SizeBox
        onWidthChanged={setWidth}
        borderWidth="1px"
        borderColor="gray.100"
        borderRadius={allowDownload ? `${theme.radii.md} ${theme.radii.md} 0 ${theme.radii.md}` : 'md'}
        aria-hidden
      >
        <Document
          file={src}
          inputRef={myRef}
          loading={loading}
          onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          {totalPages && (
            [...Array(totalPages).keys()].map((number) => (
              <Box display={(number + 1) === pageNumber ? 'block' : 'none'} aria-hidden={(number + 1) !== pageNumber}>
                <Page
                  loading={loading}
                  width={width - 2}
                  pageNumber={number + 1}
                  onRenderSuccess={() => setHeight(myRef.current.offsetHeight)}
                />
              </Box>
            ))
          )}
        </Document>
      </SizeBox>
      { totalPages && (
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
                  position: 'absolute', top: '50%', left: '0.5rem', filter, fill: 'white',
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
                  position: 'absolute', top: '50%', right: '0.5rem', filter, fill: 'white',
                }}
              />
            )}
          </Box>
        </Box>
      )}
      <Box
        textAlign="right"
        style={allowDownload ? {} : { position: 'absolute', left: '-99999px' /* needed for screen readers */ }}
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
          <Download />&nbsp;Download PDF
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
export default Deck;
