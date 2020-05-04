/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '@tylermenezes/cognitoforms-react';
import { useTheme } from '../utils';
import Box from '../Box';
import Spinner from '../Spinner';
import style from './style/index';

const CognitoForm = ({
  formId, prefill, showTitle, onSubmit, onPageChange, onFirstPageChange,
}) => {
  const theme = useTheme();
  const [hasFirstPageChange, setHasFirstPageChange] = useState(false);

  return (
    <Form
      accountId={theme.cognito.id}
      formId={formId}
      prefill={prefill}
      css={style(theme, { showTitle })}
      loading={<Box textAlign="center"><Spinner /></Box>}
      onSubmit={onSubmit}
      onPageChange={(e) => {
        onPageChange(e);
        if (!hasFirstPageChange) {
          onFirstPageChange(e);
          setHasFirstPageChange(true);
        }
      }}
    />
  );
};
CognitoForm.propTypes = {
  formId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  prefill: PropTypes.object,
  showTitle: PropTypes.bool,
  onSubmit: PropTypes.func,
  onPageChange: PropTypes.func,
  onFirstPageChange: PropTypes.func,
};
CognitoForm.defaultProps = {
  prefill: {},
  showTitle: false,
  onSubmit: () => {},
  onPageChange: () => {},
  onFirstPageChange: () => {},
};

export default CognitoForm;
