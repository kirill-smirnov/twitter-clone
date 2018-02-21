import React, { Component } from 'react';

import isUserAuthenticated from '../utils';

import './header.css';

export default class Header extends Component {
    state = {
        isMenuShowing: false,
    }

    handleClick(e) {
        this.setState((prev, state) => ({ isMenuShowing: !prev.isMenuShowing }));
    }

    render() {
        const isAuthenticated = isUserAuthenticated();

        return (
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <div className="container">
                        <a href="/" className="navbar-brand">Logo</a>
                        {/* data-toggle="collapse" data-target="#header-menu" aria-expanded="false" aria-label="Toggle navigation" */}
                        <button className="navbar-toggler collapsed" type="button"  onClick={this.handleClick.bind(this)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className={"navbar-collapse collapse " + (this.state.isMenuShowing ? "show" : "")} id="header-menu">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                                {isAuthenticated ? 
                                <li className="nav-item"><a href="/profile/" className="nav-link">Profile</a></li> 
                                : ""}
                                <li className="nav-item"><a href="/users/" className="nav-link">Users</a></li>
                                <li className="nav-item"><a href="/posts/" className="nav-link">Posts</a></li>
                                {isAuthenticated ? 
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item"><a href="/logout/" className="nav-link">Logout</a></li>
                                </ul>
                                : ""}
                            </ul>
                        </div>
                    </div>

                </nav>
            </header>
        )
    }
}