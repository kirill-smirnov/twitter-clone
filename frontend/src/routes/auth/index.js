import React, { Component } from 'react';

import AuthTabs from './tabs';
import AuthContent from './content';


import './auth.css';

const tabs = ["Log in", "Sign up"];

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            tabIndex: 0,
            tabs,
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(i, e) {
        this.setState({ tabIndex: i, isLogin: (!i) });

    }

    render() {
        return (
            <div className="auth ">
                <AuthTabs handleClick={this.handleTabClick} {...this.state} />

                <AuthContent {...this.state} />
            </div>
        )
    }
}