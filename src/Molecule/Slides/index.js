import React, { forwardRef, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';

const Slides = forwardRef(({
  duration, transitionDuration, children, ...props
}, ref) => {
  const [visibleIndex, nextSlide] = useReducer((lastIndex) => (lastIndex + 1) % children.length, 0);

  useEffect(() => {
    const interval = setInterval(nextSlide, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <Box position="relative" overflow="hidden" {...props} ref={ref}>
      {children.map((child, index) => (
        <Box
          key={child.key || index}
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          transition={`all ${transitionDuration || 1}s ease-in-out`}
          style={{ opacity: index === visibleIndex ? 1 : 0 }}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
});
Slides.displayName = 'Slides';
Slides.propTypes = {
  duration: PropTypes.number,
  transitionDuration: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
Slides.defaultProps = {
  duration: 15,
  transitionDuration: 1,
  children: null,
};
export default Slides;
