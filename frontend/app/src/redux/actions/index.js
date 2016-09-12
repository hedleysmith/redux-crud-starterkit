// Action definitions.
export const ITEM_CREATE = 'ITEM_CREATE';
export const ITEM_CREATE_SUCCESS = 'ITEM_CREATE_SUCCESS';
export const ITEM_CREATE_FAILURE = 'ITEM_CREATE_FAILURE';

export const ITEMS_REQUEST = 'ITEMS_REQUEST';
export const ITEMS_REQUEST_SUCCESS = 'ITEMS_REQUEST_SUCCESS';
export const ITEMS_REQUEST_FAILURE = 'ITEMS_REQUEST_FAILURE';

export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_UPDATE_SUCCESS = 'ITEM_UPDATE_SUCCESS';
export const ITEM_UPDATE_FAILURE = 'ITEM_UPDATE_FAILURE';

export const ITEM_DELETE = 'ITEM_DELETE';
export const ITEM_DELETE_SUCCESS = 'ITEM_DELETE_SUCCESS';
export const ITEM_DELETE_FAILURE = 'ITEM_DELETE_FAILURE';

// Action creators.
export function itemCreate(item) {
  return {
    type: ITEM_CREATE,
    item,
  };
}

export function itemCreateSuccess(item) {
  return {
    type: ITEM_CREATE_SUCCESS,
    item,
  };
}

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

export function itemDelete(id, arrayKey) {
  return {
    type: ITEM_DELETE,
    id,
    arrayKey,
  };
}
