import FormData from "form-data";
import React, { useState } from "react";
import { Box, type BoxProps, Button, Grid, TextInput } from "topo/Atom";
import { useToasts } from "topo/utils";

async function submitEmail(
  list: any,
  email: any,
  fields?: Record<string, string>
) {
  const form = new FormData();
  form.append("field_0", email);
  Object.keys(fields || {}).forEach((k) => form.append(k, fields![k]));
  return fetch(`https://eomail1.com/form/${list}`, {
    method: "POST",
    body: form as any,
  });
}

interface MailingListSubscribeProps extends BoxProps {
  emailList?: string;
  colorScheme?: string;
  textList?: any;
  variant?: string;
  fields?: Record<string, string>;
}

function MailingListSubscribe({
  emailList,
  textList,
  fields,
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
        <TextInput
          placeholder={[
            ...(emailList ? ["email"] : []),
            ...(textList ? ["phone"] : []),
          ].join(" or ")}
          value={input || undefined}
          onChange={(e: any) => setInput(e.target.value)}
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
            submitEmail(emailList, input, fields)
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
export { MailingListSubscribe, type MailingListSubscribeProps };
