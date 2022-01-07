// @ts-ignore
import Form from "@tylermenezes/cognitoforms-react";
import PropTypes from "prop-types";
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Box, Link, Spinner, Text } from "topo/Atom";
import { DataCollection } from "topo/Molecule";
import { useColorMode } from "topo/Theme";
import { useTheme } from "topo/utils";

import style from "./style/index";

interface CognitoFormProps {
  formId: number | string;
  prefill?: any;
  showTitle?: boolean;
  onSubmit?: (e: any) => null;
  onPageChange?: (e: any) => null;
  onFirstPageChange?: (e: any) => null;
  payment?: boolean;
  fallback?: boolean;
  hidePrivacy?: boolean;
  accountId?: string;
  css?: string;
}

const CognitoForm = ({
  formId,
  prefill,
  showTitle,
  onSubmit = (e) => null,
  onPageChange = (e) => null,
  onFirstPageChange = (e) => null,
  payment,
  fallback,
  accountId,
  hidePrivacy,
  css,
}: CognitoFormProps) => {
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
        css={style(theme, { showTitle, colorMode }) + `\n${css || ""}`}
        loading={
          <Box textAlign="center">
            <Spinner />
            <br />
            {fallback && (
              <Text>
                Problems loading?{" "}
                <Link
                  href={`https://services.cognitoforms.com/f/${theme.cognito.id}?id=${formId}`}
                  target="_blank"
                >
                  Open in new tab.
                </Link>
              </Text>
            )}
          </Box>
        }
        onSubmit={onSubmit}
        marginLeft="-3px"
        marginRight="-3px"
        onPageChange={(e: any) => {
          onPageChange(e);
          if (!hasFirstPageChange) {
            onFirstPageChange(e);
            setHasFirstPageChange(true);
          }
        }}
      />
      {!hidePrivacy && <DataCollection message={payment ? "payment" : "pii"} />}
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
  css: PropTypes.string,
};
CognitoForm.defaultProps = {
  prefill: {},
  showTitle: false,
  onSubmit: () => {},
  onPageChange: () => {},
  onFirstPageChange: () => {},
  payment: false,
  fallback: false,
  hidePrivacy: false,
  accountId: null,
};

export { CognitoForm, CognitoFormProps };
