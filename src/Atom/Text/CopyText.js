import React, {
  useState, useEffect, useRef, forwardRef,
} from 'react';
import useId from '@accessible/use-id';
import PropTypes from 'prop-types';
import Text from './Text';

const CopyText = forwardRef(({ children, label, ...props }, ref) => {
  const [width, setWidth] = useState(10);
  const myRef = ref || useRef();
  const id = useId();
  useEffect(() => {
    if (typeof window === 'undefined' || !myRef || !myRef.current) return;
    setWidth(myRef.current.scrollWidth);
  }, [typeof window, myRef, children]);

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <Text
        {...props}
        ref={myRef}
        id={id}
        as="input"
        type="text"
        value={children}
        width={`${width}px`}
        bg="transparent"
        readOnly
        onClick={(e) => {
          e.target.select();
          e.target.setSelectionRange(0, e.target.value.length + 1);
          // eslint-disable-next-line no-undef
          window.document.execCommand('copy');
        }}
      />
    </>
  );
});
CopyText.displayName = 'CopyText';
CopyText.propTypes = {
  ...Text.propTypes,
  label: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default CopyText;
