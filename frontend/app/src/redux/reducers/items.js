import merge from 'lodash/merge';

function deleteItem(state, key) {
  const newState = Object.assign({}, state);
  newState.items.splice(key, 1);
  return newState;
}

function createItem(state, newItem, newId) {
  const newState = Object.assign({}, state);
  newItem._id = newId;
  newItem.active = true;
  newState.items.unshift(newItem);
  return newState;
}

const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEM_CREATE':
      return state;
    case 'ITEM_CREATE_SUCCESS':
      return createItem(state, action.createData.item, action.result.id);
    case 'ITEM_CREATE_FAILURE':
      return state;
    case 'ITEMS_REQUEST':
      return {
        isFetching: true,
      };
    case 'ITEMS_REQUEST_SUCCESS':
      return {
        isFetching: false,
        items: action.items.reverse(),
        lastUpdated: action.receivedAt,
      };
    case 'ITEM_UPDATE':
      return state;
    case 'ITEM_UPDATE_SUCCESS':
      const updatedItem = { items: [] };
      updatedItem.items[action.updateData.arrayKey] = { active: false };
      return merge({}, state, updatedItem);
    case 'ITEM_UPDATE_FAILURE':
      // TODO: Move these side effects from the reducer to the saga.
      // TODO: Option and roll back update (optimistic updating).
      window.alert('Sorry, there was a problem updating, please try again...');
      return state;
    case 'ITEM_DELETE':
      return state;
    case 'ITEM_DELETE_SUCCESS':
      // TODO: When writing automated tests, try changing the arrayKey value passed to deleteItem to be 'undefined' and check that the tests pick it up.
      return deleteItem(state, action.deleteData.arrayKey);
    default:
      return state;
  }
};

export default items;
