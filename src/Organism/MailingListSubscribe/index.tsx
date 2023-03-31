import FormData from "form-data";
import React, { useState } from "react";
import { Box, type BoxProps, Button, Grid, TextInput } from "topo/Atom";
import { apiFetch, useToasts } from "topo/utils";

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
          onClick={async () => {
            // TODO: Support for phone lists
            setIsSubmitting(true);
            try {
              await apiFetch(
                'mutation SubscribeEmail ($list: String!, $email: String!) { email { subscribe(list: $list, email: $email) } }',
                { list: emailList, email: input },
                {}
              );
              success(`We've added you to the list!`);
            } catch (ex) {
              error(`Sorry, we couldn't complete your subscription. Please try again.`);
            }
            setIsSubmitting(false);
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
