import merge from 'lodash/merge';

const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_REQUEST':
      return {
        isFetching: true,
      };
    case 'ITEMS_REQUEST_SUCCESS':
      return {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt,
      };
    case 'ITEM_CREATE':
      // TODO.
      return state;
    case 'ITEM_UPDATE':
      return state;
    case 'ITEM_UPDATE_SUCCESS':
      const updatedItem = { items: [] };
      updatedItem.items[action.updateData.arrayKey] = { active: false };
      return merge({}, state, updatedItem);
    case 'ITEM_UPDATE_FAILURE':
      console.error(action);
      window.alert("Sorry, there was a problem updating, please try again...");
      // TODO: Show error message.
      // TODO: Option and roll back update (optimistic updating).
      return state;
    case 'ITEM_DELETE':
      // TODO
      return state;
    default:
      return state;
  }
};

export default items;
