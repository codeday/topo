/* eslint-disable no-undef */
import React, {
  forwardRef, useRef, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'topo/_utils';
import Box from './box';

const SizeBox = forwardRef(({
  onWidthChanged, onHeightChanged, onSizeChanged, ...props
}, ref) => {
  const boxRef = useRef();
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
    window.addEventListener('resize', windowChangeSize, false);
    return () => window.removeEventListener('resize', windowChangeSize);
  }, []);

  return useMemo(() => <Box ref={boxRef} {...props} />, [props]);
});
SizeBox.propTypes = {
  onWidthChanged: PropTypes.func,
  onHeightChanged: PropTypes.func,
  onSizeChanged: PropTypes.func,
};
SizeBox.defaultProps = {
  onWidthChanged: () => {},
  onHeightChanged: () => {},
  onSizeChanged: () => {},
};
export default SizeBox;
