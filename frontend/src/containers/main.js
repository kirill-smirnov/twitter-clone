import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Auth from '../routes/auth';
import Feed from '../routes/feed';

import './main.css';

export default class extends Component {
    render() {
        const isAuthenticated = this.props.user !== null;

        // return (
        //     <Tranding />
        //     {isAuthenticated ? <Feed /> : <Auth />}
        //     <UserInfoOrNone />
        // )

        return (
            <main className="container-fluid" id="main">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12"> Trending </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <Switch>
                            <Route path="/" component={isAuthenticated ? Feed : Auth} />
                        </Switch>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12"> Section </div>
                </div>
            </main>
        )
    }
}