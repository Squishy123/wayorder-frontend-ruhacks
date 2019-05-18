import React from 'react';

import styles from './home.module.scss';

import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({query: e.target.value});
    }

    render() {
        return (
            <div className={styles.home}>
                <div className="row w-vw wrap-reverse">
                    <div className="fg-2 merchant-search text-center">
                        <div className="fg-2 search-bar margin-10 text-center">
                        <i className="fas fa-search"/><input className="bg-white" type="text" placeholder="Search for Restaurants" value={this.state.query} onChange={this.onInputChange}/>
                        </div>
                        <Link to={`/search?query=${this.state.query}`}><button className="submit fg-1 btn-md margin-10">Get this Feast</button></Link>
                    </div>
                    <div className="fg-1 margin-10 text-right">
                        <img className={styles['hero-img']} src={require('../images/match.png')}/>
                    </div>
                </div>
            </div>
        )
    }
}