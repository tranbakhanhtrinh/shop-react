import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../store/actions/';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import LeftSideBarItem from '../../../components/LeftSideBarItem/LeftSideBarItem';
import MainBody from './MainBody/MainBody';
import Navbar from '../../../components/Navbar/Navbar';
import Aux from '../../../hoc/Aux/Aux';

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
        let nPage = pageName.map(a => (
            <LeftSideBarItem key={a} link={this.props.match.path + `/${a}`} >{a}</LeftSideBarItem>
        ));

        let modalLoading = null;
        if (this.props.loading) {
            modalLoading = <Backdrop show={this.props.loading}><Spinner /></Backdrop>
        }
        return (
            <Aux>
                <Navbar />
                <div className={classes.CMS}>
                    {modalLoading}
                    <div className={classes.LeftMenuBar}>
                        <div className={classes.LeftMenuBar__Content}>
                            {nPage}
                        </div>
                    </div>
                    <div className={classes.Body}>
                        <MainBody />
                    </div>
                </div>
            </Aux>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CMS));