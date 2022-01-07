import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlProps,
  FormLabelProps,
  forwardRef,
} from "@chakra-ui/react";

const ComposedFormControl = forwardRef<FormControlProps, "div">(
  (props: FormControlProps, ref) => (
    <FormControl marginBottom={4} marginTop={4} ref={ref} {...props} />
  )
);

const ComposedFormLabel = forwardRef<FormLabelProps, "div">(
  (props: FormLabelProps, ref) => (
    <FormLabel fontWeight={600} ref={ref} {...props} />
  )
);

export { ComposedFormControl as FormControl, ComposedFormLabel as FormLabel };
export { FormErrorMessage, FormHelperText } from "@chakra-ui/react";
