import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* fetchHomeSaga(action) {
    yield put(actions.fetchHomeStart());
    try {
        const res = yield axios.get("https://shop-react-f7aae.firebaseio.com/home.json");
        yield put(actions.fetchHomeSuccess(res.data.giangvien, res.data.header, res.data.hinhanh));
    } catch (error) {
        yield put(actions.fetchHomeFail())
    }
}