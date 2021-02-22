import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';

const ComposedFormControl = (props) => (
  <FormControl marginBottom={4} marginTop={4} {...props} />
);
ComposedFormControl.propTypes = FormControl.propTypes;
ComposedFormControl.defaultProps = FormControl.defaultProps;

const ComposedLabel = (props) => (
  <Label fontWeight={600} {...props} />
);
ComposedLabel.propTypes = Label.propTypes;
ComposedLabel.defaultProps = Label.defaultProps;

export default ComposedFormControl;
export { ComposedLabel as Label };
export { FormHelperText as HelpText, FormErrorMessage as ErrorMessage } from '@chakra-ui/react';
