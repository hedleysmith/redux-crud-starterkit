/**
 * Item list container component.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from '../../components/Item/Item.react.js';
import styles from './ItemList.css';

class ItemList extends Component {
  render() {
    let items = [];
    let allItems = [];

    if (!this.props.items.isFetching) {
      items = this.props.items.items;

      items.forEach((item, index) => {
        allItems.push(
          <Item
            key={item.id}
            itemData={item}
            arrayKey={index}
          />
        );
      });
    }

    return (
      <div>
        <h1 className={styles.heading}>Item List</h1>
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
