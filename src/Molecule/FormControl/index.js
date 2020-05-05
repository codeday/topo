import React from 'react';
import FormControl from '@chakra-ui/core/dist/FormControl';
import Label from '@chakra-ui/core/dist/FormLabel';

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
export { default as HelpText } from '@chakra-ui/core/dist/FormHelperText';
export { default as ErrorMessage } from '@chakra-ui/core/dist/FormErrorMessage';
