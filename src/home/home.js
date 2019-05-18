import React from 'react';

import styles from './home.module.scss';

export default class Home extends React.Component {


    render() {
        return (
            <div className={styles.home}>
                <h1>Hello World!</h1>
            </div>
        )
    }
}