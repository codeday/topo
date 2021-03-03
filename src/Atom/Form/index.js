import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';

const ComposedFormControl = (props) => (
  <FormControl marginBottom={4} marginTop={4} {...props} />
);
ComposedFormControl.propTypes = FormControl.propTypes;
ComposedFormControl.defaultProps = FormControl.defaultProps;

const ComposedLabel = (props) => (
  <FormLabel fontWeight={600} {...props} />
);
ComposedLabel.propTypes = FormLabel.propTypes;
ComposedLabel.defaultProps = FormLabel.defaultProps;

export default ComposedFormControl;
export { ComposedLabel as Label };
export { FormErrorMessage as ErrorMessage, FormHelperText as HelpText } from '@chakra-ui/react';
