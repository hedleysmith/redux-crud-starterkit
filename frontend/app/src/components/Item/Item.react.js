/**
 * Display an individual item.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemUpdate } from '../../redux/actions';
import ItemDisplay from './ItemDisplay.react.js';

export class Item extends Component {
  static propTypes = {
    itemData: React.PropTypes.shape({
      title: React.PropTypes.string,
      message: React.PropTypes.string,
      active: React.PropTypes.bool,
      id: React.PropTypes.string,
      arrayKey: React.PropTypes.number,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    // Make sure we bind to keep 'this' available in methods.
    // See http://stackoverflow.com/questions/29577977
    this._deactivate = this._deactivate.bind(this);
  }

  _deactivate() {
    console.log("Deactivating " + this.props.itemData.id);
    this.props.itemUpdate(
      this.props.itemData.id,
      this.props.arrayKey,
      { active: false }
    );
  }

  render() {
    const outerClass = this.props.itemData.active ? 'item item--active' : 'item'
    return (
      <ItemDisplay
        arrayKey={this.props.arrayKey}
        id={this.props.itemData.id}
        title={this.props.itemData.title}
        message={this.props.itemData.message}
        actions={this._deactivate}
        outerClass={outerClass}
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
  itemUpdate
})(Item);
