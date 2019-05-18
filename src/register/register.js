import React from 'react';

import styles from './register.module.scss';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.register}>
                <div className="row">
                    <div className="fg-1 input-field margin-10">
                        <label>First Name</label>
                        <input type="text"/>
                    </div>
                    <div className="fg-1 input-field margin-10">
                        <label>Last Name</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="fg-1 input-field margin-10">
                        <label>Email</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="fg-1 input-field margin-10">
                        <label>Password</label>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}