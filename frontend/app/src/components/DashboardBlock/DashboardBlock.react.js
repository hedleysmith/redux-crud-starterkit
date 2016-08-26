import React, { PropTypes } from 'react';

const DashboardBlock = (props) => (
  <div>
    <h3>{ props.title }</h3>
    <div>{ props.children }</div>
  </div>
);

DashboardBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default DashboardBlock;
