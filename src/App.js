import React, { Component } from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
//We will use the example container as an example
import RootContainer from './containers/RootContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <RootContainer />
          
        </header>
        
      </div>
      </Provider>
    );
  }
}

export default App;
