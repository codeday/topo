import {
  As,
  PropsOf,
  RightJoinProps,
  forwardRef as chakraForwardRef,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { ReactNode, forwardRef, useMemo } from "react";
import { Box, BoxProps } from "topo/Atom";
interface IPrototype {
  prototype: any;
}

export const dereferenceDottedString = (str: string, obj: any) =>
  str.split(".").reduce((o, i) => o[i], obj);

export const debounce = (
  func: { apply: (arg0: undefined, arg1: any[]) => void },
  wait: number | undefined,
  immediate: any
) => {
  let timeout: number | undefined;
  return (...args: any[]) => {
    const context = this;
    const later = () => {
      timeout = undefined;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const reactChildrenMapRecursive = (
  children: React.ReactNode,
  fn: (child: React.ReactNode) => void
): React.ReactNode =>
  React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      return fn(
        React.cloneElement(child, {
          children: reactChildrenMapRecursive(child.props.children, fn),
        })
      );
    }

    return fn(child);
  });

export const setChildProps =
  (props: any, defaultProps?: any, derivedProps?: (arg0: any) => any) =>
  (child: React.DetailedReactHTMLElement<any, HTMLElement>) =>
    React.cloneElement(child, {
      ...(defaultProps || {}),
      ...(child ? child.props : {}),
      ...(props || {}),
      ...(derivedProps ? derivedProps(child) : []),
    });

export const wrapHtml = (nodes: React.ReactNode) =>
  (Array.isArray(nodes) ? React.Children.toArray(nodes) : [nodes]).map((e) =>
    typeof e === "string" ||
    !(e as IPrototype & React.ReactNode).prototype ||
    !(e as IPrototype & React.ReactNode).prototype.isReactComponent ? (
      <Box>{e}</Box>
    ) : (
      e
    )
  );

export const pureRef = <T extends object, P extends As>(
  Component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<P>, T> & {
      as?: As;
    }
  >
) =>
  chakraForwardRef<T, P>((props, ref) =>
    useMemo(() => Component(props, ref), [props, ref])
  );

export const makePureBox = (
  name: string | undefined,
  defaultProps?: BoxProps,
  Component?: typeof React.Component
) => {
  const DerivedBox = pureRef<BoxProps, "div">(
    (
      { children, ...props }: any,
      ref: React.LegacyRef<HTMLDivElement> | undefined
    ) => (
      <Box {...defaultProps} {...props} ref={ref}>
        {Component ? <Component>{children}</Component> : children}
      </Box>
    )
  );

  DerivedBox.displayName = name;
  return DerivedBox;
};

export const childrenOfType = (
  children: React.ReactNode,
  type: string | React.JSXElementConstructor<any>
) =>
  React.Children.toArray(children).filter(
    (e) => (e as React.ReactElement<any>).type == type
  );
