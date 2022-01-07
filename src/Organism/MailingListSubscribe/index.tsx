import FormData from "form-data";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Box, BoxProps, Button, Grid, Input, Text } from "topo/Atom";
import { useToasts } from "topo/utils";

async function submitEmail(list: any, email: any) {
  const form = new FormData();
  form.append("name", email);
  form.append("email", email);
  form.append("list", list);
  return fetch("https://email.srnd.org/subscribe", {
    method: "POST",
    body: form as any,
  });
}

interface MailingListSubscribeProps extends BoxProps {
  emailList?: string;
  colorScheme?: string;
  textList?: any;
  variant?: string;
}

function MailingListSubscribe({
  emailList,
  textList,
  variant = "solid",
  colorScheme = "green",
  ...props
}: MailingListSubscribeProps) {
  const { success, error } = useToasts();
  const [input, setInput] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Box {...props}>
      <Grid templateColumns="1fr min-content">
        <Input
          placeholder={[
            ...(emailList ? ["email"] : []),
            ...(textList ? ["phone"] : []),
          ].join(" or ")}
          value={input || undefined}
          onChange={(e) => setInput(e.target.value)}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          borderRightWidth={0}
        />
        <Button
          variant={variant || "solid"}
          colorScheme={colorScheme || "green"}
          isLoading={isSubmitting}
          onClick={() => {
            // TODO: Support for phone lists
            setIsSubmitting(true);
            submitEmail(emailList, input)
              .then(() => {
                success(`You're subscribed!`);
                setInput("");
              })
              .catch(() => {
                error(
                  `Sorry, we couldn't complete your subscription, please try again.`
                );
              })
              .finally(() => {
                setIsSubmitting(false);
              });
          }}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        >
          Subscribe
        </Button>
      </Grid>
    </Box>
  );
}
export { MailingListSubscribe, MailingListSubscribeProps };
