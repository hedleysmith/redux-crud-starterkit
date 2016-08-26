// Action definitions.
export const ITEMS_REQUEST = 'ITEMS_REQUEST';
export const ITEMS_REQUEST_SUCCESS = 'ITEMS_REQUEST_SUCCESS';
export const ITEMS_REQUEST_FAILURE = 'ITEMS_REQUEST_FAILURE';

export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_UPDATE_SUCCESS = 'ITEM_UPDATE_SUCCESS';
export const ITEM_UPDATE_FAILURE = 'ITEM_UPDATE_FAILURE';

// Action creators.
export function itemsRequest() {
  return {
    type: ITEMS_REQUEST,
  };
}

export function itemsRequestSuccess(items) {
  return {
    type: ITEMS_REQUEST_SUCCESS,
    items,
    receivedAt: Date.now(),
  };
}

export function itemUpdate(id, arrayKey, update) {
  return {
    type: ITEM_UPDATE,
    id,
    arrayKey,
    update,
  };
}
