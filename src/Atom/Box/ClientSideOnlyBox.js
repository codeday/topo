/* eslint-disable no-undef */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from './box';
import { useSsr } from '../../utils';

function ClientSideOnlyBox({ children, ...props }, ref) {
  const isSsr = useSsr();
  return isSsr ? null : (
    <Box {...props} ref={ref}>{children}</Box>
  );
}
ClientSideOnlyBox.propTypes = {
  children: PropTypes.oneOf([PropTypes.element, PropTypes.arrayOf(PropTypes.element)], PropTypes.string).isRequired,
};

export default forwardRef(ClientSideOnlyBox);
