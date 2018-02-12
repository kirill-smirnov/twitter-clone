import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isAuthenticated = this.props.data.isAuthenticated;

        return (
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div className="container">
                        <a href="#" className="navbar-brand">Logo</a>
                        <ul className="nav m-auto">
                            <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                            {isAuthenticated ? <li className="nav-item"><a href="#" className="nav-link">Profile</a></li> : ""}
                            <li className="nav-item"><a href="#" className="nav-link">Users</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Posts</a></li>
                        </ul>
                    </div>

                </nav>
            </header>
        )
    }
}