import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionType from '../../../store/actions/home';

import classes from './CMS.module.scss';

class CMS extends Component {

    componentDidMount() {
        this.props.onFetchHome();
        axios.get('https://shop-react-f7aae.firebaseio.com/db.json').then(res => console.log(res))
    }

    render() {
        const { gv, hd, ha } = {
            gv: { ...this.props.giangvien },
            hd: { ...this.props.header },
            ha: { ...this.props.hinhanh }
        }
        const img = Object.values({ ...ha.img });
        // console.log(img)

        return (
            <div className={classes.CMS}>
                <div className={classes.LeftMenuBar}>

                </div>
                <div className={classes.Body}>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        giangvien: state.giangvien,
        header: state.header,
        hinhanh: state.hinhanh,
        loading: state.loading
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHome: () => dispatch(actionType.fetchHome())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CMS);