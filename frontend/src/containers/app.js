import React, { Component } from 'react';
import Utils from '../utils';

// import logo from '../logo.svg';
import './app.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Main from './main';

export default class App extends Component {
  state = {
    isAuthenticated: Utils.isUserAuthenticated,
    // render: this.render
  }

  render() {

    return (
      <div className="App">
        <Header {...this.state} />
        <Main {...this.state} />
        <Footer />
      </div>
    );
  }
}
