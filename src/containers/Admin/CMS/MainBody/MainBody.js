import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import _ from 'lodash';
import RightMainBody from '../../../../components/RightMainBody/RightMainBody';
import Aux from '../../../../hoc/Aux/Aux';
import * as actions from '../../../../store/actions';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.onChangedTextareaHandler = this.onChangedTextareaHandler.bind(this);
    }

    componentDidMount() {
        this.props.onFetchNamePage();
    }
    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    onChangedTextareaHandler = (event, identifier, val) => {

    }

    render() {
        const pageName = _.cloneDeep({ ...this.props.namePage });
        const pageNameArr = [];
        for (let key in pageName) {
            pageNameArr.push(this.capitalize(key))
        }

        const routerBody = pageNameArr.map((a, ia) => {
            return pageName[a.toLowerCase()].map((b, ib) => {
                return (
                    <Route key={ia + ib} path={this.props.match.path + `/${a}`} render={() => <RightMainBody elePage={b.title} value={b.des} name={b.id} changed={this.onChangedTextareaHandler()} />} />
                )
            })

        });
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