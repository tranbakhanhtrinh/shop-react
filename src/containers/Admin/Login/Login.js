import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './Login.module.scss';


class Login extends Component {
    state = {
        loginForm: {
            email: {
                label: "Email",
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                label: "Password",
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        }
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = { ...this.state.loginForm };
        const updatedFormEle = updatedForm[inputIdentifier];
        updatedFormEle.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormEle;
        this.setState({ loginForm: updatedForm });
    }
    onLoginHandler = () => {

    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        };

        let form = formElementsArray.map(formElement => (
            <Input key={formElement.id}
                label={formElement.config.label}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value} />
        ))

        return (
            <div className={classes.Login}>
                <form className={classes.Form} onSubmit={this.onLoginHandler}>
                    <h3>Login</h3>
                    {form}
                    <div className={classes.FormButton}>
                        <div className={classes.FormBgBtn}></div>
                        <Button btnType="Login">Login</Button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Login;