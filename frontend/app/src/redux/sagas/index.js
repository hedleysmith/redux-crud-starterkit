/**
 * Here we define 'Sagas', these are functions which act like a separate thread
 * where asynchronous actions and other side effects take palce.
 * For more info see http://yelouafi.github.io/redux-saga/
 */

import { fork, put, call, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as actions from '../actions';
import { API, apiService } from '../services/api';

export function fetchItemsApi() {
  return fetch(API.API_ITEMS)
          .then(response => response.json())
          .then(json => json);
}

export function* fetchItems() {
  yield put(actions.itemsRequest());
  const items = yield call(fetchItemsApi);
  yield put(actions.itemsRequestSuccess(items));
}

function* itemUpdate(updateData) {
  try {
    const result = yield call(apiService.itemUpdate, updateData);
    yield put({ type: 'ITEM_UPDATE_SUCCESS', result, updateData });
  } catch (error) {
    yield put({ type: 'ITEM_UPDATE_FAILURE', error, updateData });
  }
}

function* watchItemUpdate() {
  while (true) {
    const updateData = yield take(actions.ITEM_UPDATE);
    yield fork(itemUpdate, updateData);
  }
}

export default function* root() {
  yield fork(fetchItems);
  yield fork(watchItemUpdate);
}
