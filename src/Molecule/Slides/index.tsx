import {ComponentWithAs, forwardRef } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useEffect, useReducer } from "react";
import { Box, BoxProps } from "topo/Atom/Box";

interface SlidesProps extends BoxProps {
  duration?: number;
}

const Slides: ComponentWithAs<"div", SlidesProps> = forwardRef<SlidesProps, "div">(
  ({ duration = 15, transitionDuration = 1, children, ...props }, ref) => {
    const [visibleIndex, nextSlide] = useReducer(
      (lastIndex) => (lastIndex + 1) % React.Children.count(children),
      0
    );

    useEffect(() => {
      const interval = setInterval(nextSlide, duration * 1000);
      return () => clearInterval(interval);
    }, [duration]);

    return (
      <Box position="relative" overflow="hidden" {...props} ref={ref}>
        {React.Children.map(children, (child, index) => (
          <Box
            key={(child as React.ReactElement<any>).key || index}
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            transition={`all ${transitionDuration || 1}s ease-in-out`}
            style={{ opacity: index === visibleIndex ? 1 : 0 }}
            aria-hidden={index !== visibleIndex}
          >
            {child}
          </Box>
        ))}
      </Box>
    );
  }
);
Slides.displayName = "Slides";
// Slides.propTypes = {
//   duration: PropTypes.number,
//   transitionDuration: PropTypes.number,
//   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
// };
// Slides.defaultProps = {
//   duration: 15,
//   transitionDuration: 1,
//   children: null,
// };
export { Slides, SlidesProps };
