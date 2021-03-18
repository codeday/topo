/* eslint-disable no-secrets/no-secrets */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from '@tylermenezes/cognitoforms-react';
import { useTheme } from 'topo/utils';
import Text, { Link } from 'topo/Atom/Text';
import Box from 'topo/Atom/Box';
import Spinner from 'topo/Atom/Spinner';
import DataCollection from 'topo/Molecule/DataCollection';
import { useColorMode } from 'topo/Theme';
import style from './style/index';

const CognitoForm = ({
  formId, prefill, showTitle, onSubmit, onPageChange, onFirstPageChange, payment, fallback, accountId, hidePrivacy,
}) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  theme.colors.current = theme.colors.modes[colorMode];
  const [hasFirstPageChange, setHasFirstPageChange] = useState(false);

  return (
    <>
      <Form
        accountId={accountId || theme.cognito.id}
        formId={formId}
        prefill={prefill}
        css={style(theme, { showTitle, colorMode })}
        loading={(
          <Box textAlign="center">
            <Spinner /><br />
            {fallback && (
              <Text color="current.textLight">
                Problems loading?{' '}
                <Link href={`https://services.cognitoforms.com/f/${theme.cognito.id}?id=${formId}`} target="_blank">
                  Open in new tab.
                </Link>
              </Text>
            )}
          </Box>
        )}
        onSubmit={onSubmit}
        marginLeft="-3px"
        marginRight="-3px"
        onPageChange={(e) => {
          onPageChange(e);
          if (!hasFirstPageChange) {
            onFirstPageChange(e);
            setHasFirstPageChange(true);
          }
        }}
      />
      {!hidePrivacy && <DataCollection message={payment ? 'payment' : 'pii'} />}
    </>
  );
};
CognitoForm.propTypes = {
  formId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  prefill: PropTypes.object,
  showTitle: PropTypes.bool,
  onSubmit: PropTypes.func,
  onPageChange: PropTypes.func,
  onFirstPageChange: PropTypes.func,
  payment: PropTypes.bool,
  fallback: PropTypes.bool,
  hidePrivacy: PropTypes.bool,
  accountId: PropTypes.string,
};
CognitoForm.defaultProps = {
  prefill: {},
  showTitle: false,
  onSubmit: () => { },
  onPageChange: () => { },
  onFirstPageChange: () => { },
  payment: false,
  fallback: false,
  hidePrivacy: false,
  accountId: null,
};

export default CognitoForm;
