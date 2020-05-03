/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Form from '@tylermenezes/cognitoforms-react';
import { useTheme } from '../utils';
import Box from '../Box';
import Spinner from '../Spinner';
import style from './style/index';

const CognitoForm = ({ id, prefill, showTitle }) => {
  const theme = useTheme();

  return (
    <Form
      accountId={theme.cognito.id}
      formId={id}
      prefill={prefill}
      css={style(theme, { showTitle })}
      loading={<Box textAlign="center"><Spinner /></Box>}
    />
  );
};
CognitoForm.propTypes = {
  id: PropTypes.oneOf(PropTypes.number, PropTypes.string).isRequired,
  prefill: PropTypes.object,
  showTitle: PropTypes.bool,
};
CognitoForm.defaultProps = {
  prefill: {},
  showTitle: false,
};

export default CognitoForm;
