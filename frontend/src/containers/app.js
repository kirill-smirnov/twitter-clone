import React, { Component } from 'react';
import Utils from '../utils';

// import logo from '../logo.svg';
import './app.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Main from './main';
import AuthAPI from '../components/auth/authAPI';

export default class App extends Component {
  state = {
    user: AuthAPI.getUsername,
  }

  changeUser(user) {
    this.setState({user});
  }

  isAuthenticated() {
    return this.state.user != null;
  }

  render() {

    return (
      <div className="App">
        <Header {...this.state} isAuthenticated={this.isAuthenticated.bind(this)} changeUser={this.changeUser.bind(this)}/>
        <Main {...this.state} isAuthenticated={this.isAuthenticated.bind(this)} changeUser={this.changeUser.bind(this)} />
        <Footer />
      </div>
    );
  }
}
