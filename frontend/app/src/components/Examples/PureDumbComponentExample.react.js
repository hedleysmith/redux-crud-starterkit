]/**
 * Pure or 'stateless' components are simpler and can be more performant.
 * They are written as pure functions and are always 'dumb'.
 */
import React, { PropTypes } from 'react';

const PureExample = (props) => (
  <div>
    <h3>Pure Component</h3>
    <p>{ props.message }</p>
  </div>
);

PureExample.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PureExample;


/**
 * Alternate syntax.
 */
export default function PureExample2 (props) {
  return (
    <div>
      <h3>Pure Component</h3>
      <div>{ props.message }</div>
    </div>
  );
}
