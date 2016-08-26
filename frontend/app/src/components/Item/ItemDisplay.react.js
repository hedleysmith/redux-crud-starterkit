import React, { Component, PropTypes } from 'react';
import styles from './item.css';

export default class ItemDisplay extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    actions: PropTypes.func,
  };

  render() {
    return (
      <div className={this.props.outerClass}>
        <h3>{this.props.title}</h3>
        <p>{this.props.message}</p>
        <a className={styles.action} onClick={this.props.actions}>Dismiss</a>
      </div>
    );
  }
}
