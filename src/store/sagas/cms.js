import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* initNamePageSaga(action) {
    try {
        yield put(actions.fetchNamePageStart());
        const res = yield axios.get("https://shop-react-f7aae.firebaseio.com/db.json");
        yield put(actions.fetchNamePageSuccess(res.data));
    } catch (error) {
        yield put(actions.fetchNamePageFail(error))
    }
}