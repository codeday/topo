import React from "react";
import {
  FormControl,
  FormLabel,
  type FormControlProps,
  type FormLabelProps,
  forwardRef,
  type ComponentWithAs,
} from "@chakra-ui/react";

const ComposedFormControl: ComponentWithAs<"div", FormControlProps> = forwardRef<FormControlProps, "div">(
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
