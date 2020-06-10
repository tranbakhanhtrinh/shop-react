import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import _ from 'lodash';
import RightMainBody from '../../../../components/RightMainBody/RightMainBody';
import Aux from '../../../../hoc/Aux/Aux';

class MainBody extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {}

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    onChangedTextareaHandler = (event, iden) => {
        const updatedForm = { ...this.props.namePage };
        for (let key in updatedForm) {
            updatedForm[key].forEach(ab => {
                if (ab.id === iden) {
                    ab.des = event.target.value
                }
            })
        }
        this.setState({ namePage: updatedForm });
    }

    render() {
        // console.log(this.state.namePage)
        const pageName = _.cloneDeep({ ...this.props.namePage });
        const pageNameArr = [];
        for (let key in pageName) {
            pageNameArr.push(this.capitalize(key))
        }

        const routerBody = pageNameArr.map((a, ia) => {
            return pageName[a.toLowerCase()].map((b, ib) => {
                return (
                    <Switch>
                        <Route key={ia + ib} path={this.props.match.path + `/${a}`} render={() => <RightMainBody elePage={b.title} value={b.des} name={b.id} changed={(e) => this.onChangedTextareaHandler(e, b.id)} />} />
                    </Switch>
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

export default connect(mapStateToProps)(withRouter(MainBody));