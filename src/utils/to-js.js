import React from 'react';
import { Iterable } from 'immutable';
import toPairs from 'lodash/toPairs';

export const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;

  const propsJS = toPairs(
    wrappedComponentProps
  ).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE]
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE];
    return newProps
  }, {});

  return <WrappedComponent {...propsJS} />
};
