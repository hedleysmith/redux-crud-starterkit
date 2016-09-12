import React, { Component, PropTypes } from 'react';
import styles from './item.css';

export default class ItemDisplay extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    actions: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  render() {
    const actions = [];
    this.props.actions.forEach((item, index) => {
      actions.push(
        <a className={styles.actions} onClick={item.callback} key={item.name}>{item.name}</a>
      )
    });
    return (
      <div className={this.props.outerClass}>
        <h3>{this.props.title}</h3>
        <p>{this.props.message}</p>
        { actions }
      </div>
    );
  }
}
