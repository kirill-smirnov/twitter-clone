import React, { Component } from 'react';

import Auth from '../components/auth/auth';
import Feed from '../components/feed';

import './main.css';

export default class extends Component {
    render() {
        const isAuthenticated = this.props.data.isAuthenticated;

        // return (
        //     <Tranding />
        //     {isAuthenticated ? <Feed /> : <Auth />}
        //     <UserInfoOrNone />
        // )

        return (
            <div className="container-fluid" id="main">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12"> Trending </div>
                    <div className="col-lg-8 col-md-8 col-sm-12"> {isAuthenticated ? <Feed /> : <Auth />} </div>
                    <div className="col-lg-2 col-md-2 col-sm-12"> Section </div>
                </div>
            </div>
        )
    }
}