import React from 'react';

import styles from './emailConfirmationRedirect.module.scss';

export default class EmailConfirmationRedirect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.emailRedirect}>
                <h1 className="display">Please check your email for verification!</h1>
            </div>
        )
    }
}