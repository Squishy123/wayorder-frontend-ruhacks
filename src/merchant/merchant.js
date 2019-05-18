import React from 'react';

import styles from './merchant.module.scss';

import axios from 'axios';

export default class Merchant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            tables: []
        }
        console.log(this.props.match.params.id);
        this.getTables = this.getTables.bind(this);
        this.getMenu = this.getMenu.bind(this);
    }

    componentWillMount() {
        this.getTables();
        this.getMenu();
    }

    async getTables() {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/tables?merchant_id=${this.props.match.params.id}`);
        if(res.data.data.tables) {
        this.setState({tables: res.data.data.tables.map((t, i) => (
            <div className={styles.tableItem}>
                <h3>Table {i+1}</h3>
                <h3>{t.status}</h3>
                <h3>{t.space}</h3>        
            </div>
        ))})
        }
    }

    async getMenu() {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/products?merchant_id=${this.props.match.params.id}`);
        if(res.data.data.products) {
        this.setState({menu: res.data.data.products.map((p) => (
            <div className={styles.menuItem}>
                {(p.image) ? <img src={p.image}/> : null}
                <h3>{p.name}</h3>
                <h3>${p.price}</h3>
                <p>{p.description}</p>
            </div>
        ))});
        }
    }

    render() {
        return (
            <div className={`${styles.merchant} text-center`}>
                {(this.state.menu.length) ? <h2>Menu</h2> : null}
                
                <div className={`row ${styles.menu}`}>
                    {this.state.menu}
                </div>
                {(this.state.tables.length) ? <h2>Tables</h2> : null}
                <div className={`row ${styles.tables}`}>
                    {this.state.tables}
                </div>
            </div>
        )
    }
}