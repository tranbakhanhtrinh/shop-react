import * as actionType from '../actions/actionTypes';

const initialState = {
    giangvien: null,
    header: null,
    hinhanh: null,
    loading: false,
}

const fetchHomeStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const fetchHomeSuccess = (state, action) => {
    return {
        ...state,
        giangvien: action.giangvien,
        header: action.header,
        hinhanh: action.hinhanh,
        loading: false
    }
}

const fetchHomeFail = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_HOME_START:
            return fetchHomeStart(state, action)
        case actionType.FETCH_HOME_SUCCESS:
            return fetchHomeSuccess(state, action)
        case actionType.FETCH_HOME_FAIL:
            return fetchHomeFail(state, action)
        default: return state;
    }
}

export default reducer;