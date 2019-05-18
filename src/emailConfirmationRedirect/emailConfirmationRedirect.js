import React from 'react';

import styles from './emailConfirmationRedirect.module.scss';

import { Link } from 'react-router-dom';

export default class EmailConfirmationRedirect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.emailRedirect}>
                <div className="row">
                    <h1 className="display text-center">Please check your email for verification!</h1>
                    <Link to="/"><button class="submit btn-md">Return Home</button></Link>
                </div>
            </div>
        )
    }
}