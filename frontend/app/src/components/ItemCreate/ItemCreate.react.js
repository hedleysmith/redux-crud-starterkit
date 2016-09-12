/**
 * Form to create a new item.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemCreate } from '../../redux/actions';
import ItemCreateDisplay from './ItemCreateDisplay.react.js';

export class ItemCreate extends Component {
  constructor(props) {
    super(props);
    this._create = this._create.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  _create(event) {
    event.preventDefault();
    this.props.itemCreate({
      title: this.state.title,
      message: this.state.message,
    });
  }

  render() {
    return (
      <ItemCreateDisplay
        callback={this._create}
        handleChange={this._handleChange}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps, {
  itemCreate,
})(ItemCreate);
