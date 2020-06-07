import { takeEvery } from 'redux-saga/effects';

import { initNamePageSaga } from './cms';
import * as actionType from '../actions/actionTypes';

export function* watchNamePage() {
    yield takeEvery(actionType.INIT_FETCH_NAMEPAGE, initNamePageSaga);
}