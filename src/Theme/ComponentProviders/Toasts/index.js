import React from 'react';
import PropTypes from 'prop-types';
import { ToastProvider as BuiltinToastProvider } from 'react-toast-notifications';
import CustomToast from './CustomToast';

export default function ToastProvider({ children }) {
  return (
    <BuiltinToastProvider
      components={{ Toast: CustomToast }}
      placement="top-right"
      autoDismiss
    >
      {children}
    </BuiltinToastProvider>
  );
}
ToastProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};
