import React from 'react';

import axios from 'axios';

import styles from './register.module.scss';

import { Redirect } from 'react-router-dom';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNameValue: "",
            lastNameValue: "",
            emailValue: "",
            passwordValue: "",
            status: ""
        }

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    onFirstNameChange(e) {
        this.setState({firstNameValue: e.target.value})
    }

    onLastNameChange(e) {
        this.setState({lastNameValue: e.target.value})
    }

    onEmailChange(e) {
        this.setState({emailValue: e.target.value})
    }

    onPasswordChange(e) {
        this.setState({passwordValue: e.target.value})
    }

    async registerUser() {
        await axios.post(`http://localhost:3000/user`, 
        {first_name: this.state.firstNameValue,
            last_name: this.state.lastNameValue,
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
            <div className={styles.register}>
                {
                    (this.state.status === "success") ? <Redirect to="/emailconfirm/redirect"/> : null
                }

                <div className="row">
                    <div className="fg-1 margin-10">
                        <h3 className="display mb-5">Never wait for your meal</h3>
                        <h4 className="mt-5">Register your account to our database</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="fg-1 input-field margin-10">
                        <label>First Name</label>
                        <input type="text" value={this.state.firstNameValue} onChange={this.onFirstNameChange}/>
                    </div>
                    <div className="fg-1 input-field margin-10">
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastNameValue} onChange={this.onLastNameChange}/>
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
                    <button className="submit fg-1 btn-md margin-10" onClick={this.registerUser}>Sign Up</button>
                    <button className="login fg-1 btn-md margin-10">Login</button>
                </div>
            </div>
        )
    }
}