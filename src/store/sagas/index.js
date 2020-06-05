import { takeEvery } from 'redux-saga/effects';

import { fetchHomeSaga } from './home';
import * as actionType from '../actions/actionTypes';

export function* watchHome() {
    yield takeEvery(actionType.FETCH_HOME, fetchHomeSaga);
}