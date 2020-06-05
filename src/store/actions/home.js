import * as actionType from './actionTypes';
// import axios from 'axios';

export const fetchHomeStart = () => {
    return {
        type: actionType.FETCH_HOME_START
    }
}


export const fetchHomeSuccess = (giangvien, header, hinhanh) => {
    return {
        type: actionType.FETCH_HOME_SUCCESS,
        giangvien: giangvien,
        header: header,
        hinhanh: hinhanh
    }
}
export const fetchHomeFail = () => {
    return {
        type: actionType.FETCH_HOME_FAIL
    }
}

export const fetchHome = () => {
    return {
        type: actionType.FETCH_HOME
    }
}