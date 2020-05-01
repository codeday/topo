import React, { forwardRef, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Slideshow = forwardRef(({
  duration, transitionDuration, srcs, resize, children, ...props
}, ref) => {
  const [visibleIndex, nextSlide] = useReducer((lastIndex) => (lastIndex + 1) % srcs.length, 0);

  useEffect(() => {
    const interval = setInterval(nextSlide, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <Box position="relative" overflow="hidden" ref={ref} {...props}>
      {srcs.map((src, index) => (
        <Box
          key={src}
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage={`url('${src}')`}
          backgroundPosition="50% 50%"
          backgroundSize={resize || 'cover'}
          backgroundRepeat="no-repeat"
          transition={`all ${transitionDuration || 1}s ease-in-out`}
          style={{ opacity: index === visibleIndex ? 1 : 0 }}
        />
      ))}
      <Box position="absolute" top="0" left="0" bottom="0" right="0">{children}</Box>
    </Box>
  );
});
Slideshow.displayName = 'Slideshow';
Slideshow.propTypes = {
  srcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number,
  transitionDuration: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  resize: PropTypes.string,
};
Slideshow.defaultProps = {
  duration: 15,
  transitionDuration: 1,
  resize: 'cover',
  children: null,
};
export default Slideshow;
