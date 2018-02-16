import React, { Component } from 'react';
// import logo from '../logo.svg';
import './app.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Main from './main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
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

export default App;
