/**
 * Display an individual item.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemUpdate, itemDelete } from '../../redux/actions';
import ItemDisplay from './ItemDisplay.react.js';

export class Item extends Component {
  static propTypes = {
    itemData: React.PropTypes.shape({
      _id: React.PropTypes.string,
      title: React.PropTypes.string,
      message: React.PropTypes.string,
      active: React.PropTypes.bool,
      arrayKey: React.PropTypes.number,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    // Make sure we bind to keep 'this' available in methods.
    // See http://stackoverflow.com/questions/29577977
    this._deactivate = this._deactivate.bind(this);
    this._delete = this._delete.bind(this);
  }

  _deactivate() {
    console.log("Deactivating " + this.props.itemData.id);
    this.props.itemUpdate(
      this.props.itemData._id,
      this.props.arrayKey,
      { active: false }
    );
  }

  _delete() {
    this.props.itemDelete(
      this.props.itemData._id,
      this.props.arrayKey,
    );
  }

  render() {
    const outerClass = this.props.itemData.active ? 'item item--active' : 'item'
    const actions = [
      {
        name: 'Deactivate',
        callback: this._deactivate,
      },
      {
        'name': 'Delete',
        callback: this._delete,
      }
    ];

    return (
      <ItemDisplay
        arrayKey={this.props.arrayKey}
        id={this.props.itemData._id}
        title={this.props.itemData.title}
        message={this.props.itemData.message}
        actions={actions}
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
  itemUpdate,
  itemDelete
})(Item);
