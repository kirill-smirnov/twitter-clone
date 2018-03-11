import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Utils from '../utils';
import Auth from '../components/auth';
import Feed from '../components/feed';

import './main.css';

export default class extends Component {
    render() {
        const { isAuthenticated } = this.props;
        
        return (
            <main className="container-fluid" id="main">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12"> Trending </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <Switch>
                            <Route exact path="/" render={
                                () => (isAuthenticated() ? (<Redirect to="/feed/" />) : <Auth changeUser={this.props.changeUser} />
                                )} />
                            <Route path="/feed/" render={
                                () => (isAuthenticated() ? <Feed changeUser={this.props.changeUser} /> : (<Redirect to="/" />)
                                )} />
                        </Switch>
                    </div>
                     <div className="col-lg-2 col-md-2 col-sm-12"> Section </div>
                </div>
            </main>
        )
    }
}