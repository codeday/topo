import Form from "@tylermenezes/cognitoforms-react";
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Box, Link, Spinner, Text } from "topo/Atom";
import { DataCollection } from "topo/Molecule";
import { useColorMode } from "topo/Theme";
import { useTheme } from "topo/utils";

import style from "./style";

interface CognitoFormProps {
  formId: number | string;
  prefill?: any;
  showTitle?: boolean;
  onSubmit?: () => any;
  onPageChange?: () => any;
  onFirstPageChange?: () => any;
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
  onSubmit = () => null,
  onPageChange = () => null,
  onFirstPageChange = () => null,
  payment,
  accountId,
  hidePrivacy,
  css,
}: CognitoFormProps) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  theme.colors.current = theme.colors.modes[colorMode];
  const [hasFirstPageChange, setHasFirstPageChange] = useState(false);

  const [showFallback, setShowFallback] = useState(false);
  const typeofWindow = typeof window;

  useEffect(() => {
    if (typeofWindow === 'undefined') return () => { };
    const timeout = setTimeout(() => setShowFallback(true), 15 * 1000);
    return () => clearTimeout(timeout);
  }, [typeofWindow, setShowFallback, showFallback]);

  return (
    <>
      <Form
        accountId={accountId || theme.cognito.id}
        formId={formId}
        prefill={prefill}
        css={(formId) => style({ theme, showTitle, colorMode, formId }) + `\n${css || ""}`}
        loading={
          <Box textAlign="center">
            <Spinner />
            <br />
            {showFallback && (
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
        onPageChange={() => {
          onPageChange();
          if (!hasFirstPageChange) {
            onFirstPageChange();
            setHasFirstPageChange(true);
          }
        }}
      />
      {!hidePrivacy && <DataCollection message={payment ? "payment" : "pii"} />}
    </>
  );
};

export { CognitoForm, type CognitoFormProps };
