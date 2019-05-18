import React from 'react';

import styles from './topnav.module.scss';

import {Link} from 'react-router-dom';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.topnav}>
                <Link to="/" className="grey"><h2 className={styles.logo}>WayOrder</h2></Link>
                <div className={`${styles.auth} ml-auto`}>
                    <Link to="/register" className="grey"><h3>Sign Up</h3></Link>
                    <h3>/</h3>
                    <Link to="/login" className="grey"><h3>Login</h3></Link>
                </div>
            </div>
        )
    }
}