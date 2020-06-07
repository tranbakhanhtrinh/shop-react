import * as actionType from './actionTypes';
// import axios from 'axios';

export const fetchNamePageStart = () => {
    return {
        type: actionType.FETCH_NAMEPAGE_START
    }
}

export const fetchNamePageSuccess = (namePage) => {
    return {
        type: actionType.FETCH_NAMEPAGE_SUCCESS,
        namePage: namePage
    }
}

export const fetchNamePageFail = (error) => {
    return {
        type: actionType.FETCH_NAMEPAGE_FAIL,
        error: error
    }
}

export const initFetchNamePage = () => {
    return {
        type: actionType.INIT_FETCH_NAMEPAGE
    }
}