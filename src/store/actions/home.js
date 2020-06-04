import * as actionType from './actionTypes';
import axios from 'axios';

const fetchHomeStart = () => {
    return {
        type: actionType.FETCH_HOME_START
    }
}


const fetchHomeSuccess = (giangvien, header, hinhanh) => {
    return {
        type: actionType.FETCH_HOME_SUCCESS,
        giangvien: giangvien,
        header: header,
        hinhanh: hinhanh
    }
}
const fetchHomeFail = () => {
    return {
        type: actionType.FETCH_HOME_FAIL
    }
}

export const fetchHome = () => {
    return dispatch => {
        dispatch(fetchHomeStart());
        axios.get("https://shop-react-f7aae.firebaseio.com/home.json")
            .then(res => {
                // console.log(res.data);
                dispatch(fetchHomeSuccess(res.data.giangvien, res.data.header, res.data.hinhanh))
            })
            .catch(err => dispatch(fetchHomeFail()));
    }
}