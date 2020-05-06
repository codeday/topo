import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';

export const dereferenceDottedString = (str, obj) => str.split('.').reduce((o, i) => o[i], obj);

export const debounce = (func, wait, immediate) => {
  let timeout;
  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const reactChildrenMapRecursive = (children, fn) => React.Children.map(children, (child) => {
  if (!React.isValidElement(child)) {
    return child;
  }

  if (child.props.children) {
    return fn(React.cloneElement(child, {
      children: reactChildrenMapRecursive(child.props.children, fn),
    }));
  }

  return fn(child);
});

export const setChildProps = (props, defaultProps, derivedProps) => (child) => React.cloneElement(child, {
  ...(defaultProps || {}),
  ...(child.props || {}),
  ...(props || {}),
  ...(derivedProps ? derivedProps(child) : []),
});

export const wrapHtml = (nodes) => (Array.isArray(nodes) ? React.Children.toArray(nodes) : [nodes])
  .map((e) => (typeof e === 'string' || !e.prototype || !e.prototype.isReactComponent ? <Box>{e}</Box> : e));

export const pureRef = (Component) => forwardRef((props, ref) => useMemo(() => Component(props, ref), [props, ref]));

export const makePureBox = (name, Component) => {
  const DerivedBox = pureRef(({ children, ...props }, ref) => (
    <Box {...props} ref={ref}>{Component ? <Component>{children}</Component> : children}</Box>
  ));
  DerivedBox.displayName = name;
  DerivedBox.propTypes = {
    ...Box.propTypes,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  };
  DerivedBox.defaultProps = {
    ...Box.defaultProps,
    children: [],
  };
  return DerivedBox;
};

export const childrenOfType = (children, type) => React.Children
  .toArray(children)
  .filter((e) => e.type === type);
