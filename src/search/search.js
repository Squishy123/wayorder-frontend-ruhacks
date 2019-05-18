import React from 'react';

import styles from './search.module.scss';

import axios from 'axios';

import {Link} from 'react-router-dom';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            results: []
        }

        this.getMerchants = this.getMerchants.bind(this);
    }

    componentWillMount() {
        this.getMerchants();
    }

    async getMerchants() {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/merchants`);
        this.setState({results: res.data.data.merchants.map((m) => (
            <div className={styles.card}>
                <h3>{m.name}</h3>
                <Link to={`/merchant/${m._id}`}>Check it out</Link>
            </div>))}); 
    }

    render() {
        return (
            <div className={styles.search}>
                <div className="merchant-search">
                        <div className="search-bar margin-10">
                        <i className="fas fa-search"/><input className="bg-white" type="text" placeholder="Search for Restaurants" value={this.state.query} onChange={this.onInputChange}/>
                        </div>
                        <Link to={`/search?query=${this.state.query}`}><button className="submit fg-1 btn-md margin-10">Get this Feast</button></Link>
                    </div>
                <h1 className="text-center">Results</h1>
                <div className="row">
                    {this.state.results}
                </div>
            </div>
        )
    }
}