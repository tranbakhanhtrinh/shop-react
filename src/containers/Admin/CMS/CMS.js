import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

import * as actions from '../../../store/actions/';

import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './CMS.module.scss';

class CMS extends Component {
    componentDidMount() {
        this.props.onFetchNamePage();
    }
    render() {
        const pageName = [];
        for (let key in this.props.namePage) {
            pageName.push(key);
        }
        let nPage = pageName.map((a, i) => <p key={i}>{a}</p>)
        let xoay = null;
        if (this.props.loading) {
            xoay = <Spinner />
        }
        return (
            <div className={classes.CMS}>
                {xoay}
                <div className={classes.LeftMenuBar}>
                    {nPage}
                </div>
                <div className={classes.Body}>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        namePage: state.namePage,
        loading: state.loading
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNamePage: () => dispatch(actions.initFetchNamePage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CMS);