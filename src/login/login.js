import React from 'react';

import axios from 'axios';

import styles from './login.module.scss';

import { Link, Redirect } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNameValue: "",
            lastNameValue: "",
            emailValue: "",
            passwordValue: "",
            status: ""
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    onEmailChange(e) {
        this.setState({emailValue: e.target.value})
    }

    onPasswordChange(e) {
        this.setState({passwordValue: e.target.value})
    }

    async loginUser() {
        await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, 
        {
            email: this.state.emailValue,
            password: this.state.passwordValue
        })
        .then((res) => {
            this.setState({status: res.data.status});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className={styles.login}>
                {
                    (this.state.status === "success") ? <Redirect to="/emailconfirm/redirect"/> : null
                }

                <div className="row">
                    <div className="fg-1 margin-10">
                        <h3 className="display mb-5">We get your food on time</h3>
                        <h4 className="mt-5">Welcome back, login to your account</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="fg-1 input-field margin-10">
                        <label>Email</label>
                        <input type="text" value={this.state.emailValue} onChange={this.onEmailChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="fg-1 input-field margin-10">
                        <label>Password</label>
                        <input type="password" value={this.state.passwordValue} onChange={this.onPasswordChange}/>
                    </div>
                </div>
                <div className="row flex-start">
                    <button className="submit fg-1 btn-md margin-10" onClick={this.loginUser}>Login</button>
                    <Link to="/register"><button className="info fg-1 btn-md margin-10">Sign Up</button></Link>
                </div>
            </div>
        )
    }
}