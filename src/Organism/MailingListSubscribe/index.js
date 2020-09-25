import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from 'topo/Atom/Text';
import TextInput from 'topo/Atom/Input/Text';
import Box, { Grid } from 'topo/Atom/Box';
import Button from 'topo/Atom/Button';
import { useToasts } from 'topo/utils';
import FormData from 'form-data';

async function submitEmail(list, email) {
  const form = new FormData();
  form.append('name', email);
  form.append('email', email);
  form.append('list', list);
  const result = await fetch('https://email.srnd.org/subscribe', { method: 'POST', body: form });
  console.log(result);
}

export default function MailingListSubscribe({
  emailList, textList, variant, variantColor, props,
}) {
  const { success, error } = useToasts();
  const [input, setInput] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Box {...props}>
      <Grid templateColumns="1fr min-content">
        <TextInput
          placeholder={[...(emailList ? ['email'] : []), ...(textList ? ['phone'] : [])].join(' or ')}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          borderRightWidth={0}
        />
        <Button
          variant={variant || 'solid'}
          variantColor={variantColor || 'green'}
          isLoading={isSubmitting}
          onClick={async () => {
            // TODO: Support for phone lists
            setIsSubmitting(true);
            try {
              await submitEmail(emailList, input);
              success(`You're subscribed!`);
              setInput('');
            } catch (ex) {
              error(`Sorry, we couldn't complete your subscription, please try again.`);
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
MailingListSubscribe.propTypes = {
  variant: PropTypes.string,
  variantColor: PropTypes.string,
  emailList: PropTypes.string,
  textList: PropTypes.string,
};
MailingListSubscribe.defaultProps = {
  variant: 'solid',
  variantColor: 'green',
  emailList: '',
  textList: '',
};
