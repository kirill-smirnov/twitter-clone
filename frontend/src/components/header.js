import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Utils from '../utils';

import './header.css';

export default class Header extends Component {
    state = {
        isMobileMenuShowing: false,
        centerMenu: Utils.getMenuRoutes(),
        activeTab: 0,
    }

    handleMenuIconClick(e) {
        this.setState((prev, state) => ({ isMobileMenuShowing: !prev.isMobileMenuShowing }));
    }

    handleMenuItemClick(i, e) {
        this.setState({activeTab: i});
    }

    render() {
        const { isAuthenticated } = this.props;

        return (
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Logo</Link>
            
                        <button className="navbar-toggler collapsed" type="button"  onClick={this.handleMenuIconClick.bind(this)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className={"navbar-collapse collapse " + (this.state.isMobileMenuShowing ? "show" : "")} id="header-menu">
                            <ul className="navbar-nav navbar-center m-auto">
                                {
                                    this.state.centerMenu.map((tab, i) =>  {
                                        return (
                                            <li className={
                                                "nav-item " + (this.state.activeTab === i ? 'active': '')
                                                + (!(tab.showIfAnonimous && isAuthenticated) ? 'hide' : '')}
                                                onClick={e => this.handleMenuItemClick(i, e)}
                                            >
                                                <Link to={tab.url} className="nav-link">{tab.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {isAuthenticated ?
                            <ul class="navbar-nav navbar-right">
                                <li className="nav-item"><Link to="/logout/" className="nav-link">Logout</Link></li>
                            </ul>
                            : ""}
                        </div>
                    </div>

                </nav>
            </header>
        )
    }
}