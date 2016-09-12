/**
 * Here we define 'Sagas', these are functions which act like a separate thread
 * where asynchronous actions and other side effects take palce.
 * For more info see http://yelouafi.github.io/redux-saga/
 */

import { fork, put, call, take } from 'redux-saga/effects';
import * as actions from '../actions';
import { apiService } from '../services/api';

function* itemCreate(createData) {
  try {
    const result = yield call(apiService.itemCreate, createData);
    yield put({ type: 'ITEM_CREATE_SUCCESS', result, createData });
  } catch (error) {
    yield put({ type: 'ITEM_CREATE_FAILURE', error, createData });
  }
}

export function* fetchItems() {
  yield put(actions.itemsRequest());
  const items = yield call(apiService.itemFetch);
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

function* itemDelete(deleteData) {
  try {
    const result = yield call(apiService.itemDelete, deleteData.id);
    yield put({ type: 'ITEM_DELETE_SUCCESS', result, deleteData });
  } catch (error) {
    yield put({ type: 'ITEM_DELETE_FAILURE', error, deleteData });
  }
}

function* watchItemCreate() {
  while (true) {
    const createData = yield take(actions.ITEM_CREATE);
    yield fork(itemCreate, createData);
  }
}

function* watchItemUpdate() {
  while (true) {
    const updateData = yield take(actions.ITEM_UPDATE);
    yield fork(itemUpdate, updateData);
  }
}

function* watchItemDelete() {
  while (true) {
    const deleteData = yield take(actions.ITEM_DELETE);
    yield fork(itemDelete, deleteData);
  }
}

export default function* root() {
  yield fork(fetchItems);
  yield fork(watchItemCreate);
  yield fork(watchItemUpdate);
  yield fork(watchItemDelete);
}
