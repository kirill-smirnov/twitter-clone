import React, { Component } from 'react';
import logo from '../logo.svg';
import './app.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Main from './main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.setState({
      data: {
        isAuthenticated: false,
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.data} />
        <Main data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
