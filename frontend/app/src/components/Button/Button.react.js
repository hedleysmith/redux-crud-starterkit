import React, { PropTypes } from 'react';

const Button = (props) => (
  <div>
    <button>{ props.children }</button>
  </div>
);

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
