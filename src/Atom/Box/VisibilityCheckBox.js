/* eslint-disable no-undef */
import React, {
  useRef, useState, useLayoutEffect, useImperativeHandle, forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import Box from './box';
import ClientSideOnlyBox from './ClientSideOnlyBox';

function VisibilityCheckBoxInner({ children, ...props }, forwardedRef) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(forwardedRef, () => ref.current);

  const onResize = () => setIsVisible(ref.current.offsetWidth > 0 || ref.current.offsetHeight > 0);
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return () => {};

    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [ref, typeof window]);

  return (
    <Box {...props} ref={ref}>{isVisible && children}</Box>
  );
}
VisibilityCheckBoxInner.propTypes = {
  children: PropTypes.oneOf([PropTypes.element, PropTypes.arrayOf(PropTypes.element)], PropTypes.string).isRequired,
};

// eslint-disable-next-line no-func-assign
VisibilityCheckBoxInner = forwardRef(VisibilityCheckBoxInner);

// Wrapping this component with a check for client-side will prevent errors about useLayoutEffect on SSR
function VisibilityCheckBox({ children, ...props }, ref) {
  return (
    <ClientSideOnlyBox>
      <VisibilityCheckBoxInner ref={ref} {...props}>
        {children}
      </VisibilityCheckBoxInner>
    </ClientSideOnlyBox>
  );
}
VisibilityCheckBox.propTypes = VisibilityCheckBoxInner.propTypes;
export default forwardRef(VisibilityCheckBox);
