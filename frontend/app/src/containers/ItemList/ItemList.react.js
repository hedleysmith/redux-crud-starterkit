/**
 * Item list container component.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './ItemList.css';
import Item from '../../components/Item/Item.react.js';
import ItemCreate from '../../components/ItemCreate/ItemCreate.react.js';

class ItemList extends Component {
  render() {
    let items = [];
    let allItems = [];

    if (!this.props.items.isFetching) {
      items = this.props.items.items;

      items.forEach((item, index) => {
        allItems.push(
          <Item
            key={item._id}
            itemData={item}
            arrayKey={index}
          />
        );
      });
    }

    return (
      <div>
        <h1 className={styles.heading}>Item Stream</h1>
        <ItemCreate />
        { allItems }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(ItemList)
