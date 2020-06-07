import * as actionType from '../actions/actionTypes';

const initialState = {
    namePage: null,
    loading: false,
    error: false
}

const fetchNamePageStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}

const fetchNamePageSuccess = (state, action) => {
    return {
        ...state,
        namePage: action.namePage,
        loading: false
    }
}

const fetchNamePageFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_NAMEPAGE_START:
            return fetchNamePageStart(state, action)
        case actionType.FETCH_NAMEPAGE_SUCCESS:
            return fetchNamePageSuccess(state, action)
        case actionType.FETCH_NAMEPAGE_FAIL:
            return fetchNamePageFail(state, action)
        default: return state;
    }
}

export default reducer;