import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import _ from 'lodash';
import RightMainBody from '../../../../components/RightMainBody/RightMainBody';
import Aux from '../../../../hoc/Aux/Aux';
import Button from '../../../../components/UI/Button/Button';

import classes from './MainBody.module.scss';

class MainBody extends PureComponent {
    state = {}

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    onChangedTextareaHandler = (event, iden) => {
        const updatedForm = _.cloneDeep({ ...this.props.namePage });
        for (let key in updatedForm) {
            updatedForm[key].forEach(ab => {
                if (ab.id === iden) {
                    ab.des = event.target.value
                }
            })
        }
        this.setState({ namePage: updatedForm });
    }

    onEditedTextarea = (event) => {
        event.preventDefault();

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
                    <Route key={ia + ib} path={this.props.match.path + `/${a}`} render={() => <RightMainBody elePage={b.title} value={b.des} name={b.id} changed={(e) => this.onChangedTextareaHandler(e, b.id)} />} />
                )
            })

        });

        return (
            <Aux>
                <form>
                    {routerBody}
                    <Button btnType="Submit" clicked={this.onEditedTextarea}>Edit</Button>
                </form>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        namePage: state.namePage,
    }

}

export default connect(mapStateToProps)(withRouter(MainBody));