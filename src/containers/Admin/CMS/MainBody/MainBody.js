import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import _ from 'lodash';
import RightMainBody from '../../../../components/RightMainBody/RightMainBody';
import Aux from '../../../../hoc/Aux/Aux';
import * as actions from '../../../../store/actions';

class MainBody extends Component {

    componentDidMount() {
        this.props.onFetchNamePage();
    }
    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render() {
        const pageName = _.cloneDeep({ ...this.props.namePage });
        const pageNameArr = [];
        const dataArr = []
        for (let key in pageName) {
            pageNameArr.push(this.capitalize(key));
            for (let data in pageName[key]) {
                dataArr.push(data);
            }
        }
        console.log(dataArr);

        const routerBody = pageNameArr.map((a, ia) => (
            <div key={a} >
                <Route path={this.props.match.path + `/${a}`} render={() => <RightMainBody title={a} elePage={ia} />} />
            </div>
        ));
        return (
            <Aux>
                {routerBody}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        namePage: state.namePage,
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNamePage: () => dispatch(actions.initFetchNamePage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainBody));