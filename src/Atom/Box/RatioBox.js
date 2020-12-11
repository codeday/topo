import React, {
  useState, forwardRef, useImperativeHandle, useRef, useLayoutEffect,
} from 'react';
import PropTypes from 'prop-types';
import Box from './box';
import { useSsr } from '../../utils';

function RatioBoxInner({
  w, h, auto = 'h', autoDefault = '100%', children, ...props
}, forwardedRef) {
  const ref = useRef();
  const [computed, setComputed] = useState(autoDefault);

  useImperativeHandle(forwardedRef, () => ref.current);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return () => {};

    const refreshSize = () => {
      if (auto === 'h') {
        setComputed(Math.floor((ref.current.clientWidth / w) * h));
      } else if (auto === 'w') {
        setComputed(Math.floor(ref.current.clientHeight / h) * w);
      }
    };

    refreshSize();
    // eslint-disable-next-line no-undef
    window.addEventListener('resize', refreshSize);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener('resize', refreshSize);
  }, [w, h, auto, ref.current, typeof window]);

  return (
    <Box
      {...props}
      ref={ref}
      width={auto === 'w' ? computed : '100%'}
      height={auto === 'h' ? computed : '100%'}
    >
      {children}
    </Box>
  );
}
RatioBoxInner.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  auto: PropTypes.oneOf(['w', 'h']),
  autoDefault: PropTypes.string,
  children: PropTypes.oneOf([PropTypes.element, PropTypes.arrayOf(PropTypes.element)], PropTypes.string).isRequired,
};
RatioBoxInner.defaultProps = {
  auto: 'h',
  autoDefault: '100%',
};

// eslint-disable-next-line no-func-assign
RatioBoxInner = forwardRef(RatioBoxInner);

function RatioBox({
  auto, autoDefault = '100%', children, ...props
}, ref) {
  const ssr = useSsr();
  if (ssr) {
    return (
      <Box
        {...props}
        ref={ref}
        width={auto === 'w' ? autoDefault : '100%'}
        height={auto === 'h' ? autoDefault : '100%'}
      >
        {children}
      </Box>
    );
  }

  return <RatioBoxInner {...props} auto={auto} ref={ref}>{children}</RatioBoxInner>;
}
RatioBox.propTypes = RatioBoxInner.propTypes;
RatioBox.defaultProps = RatioBoxInner.defaultProps;
export default forwardRef(RatioBox);
