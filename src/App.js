import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from './components/FacebookLogin';

class App extends Component {
  render() {
    return (
      <div className="App">
          <FacebookLogin></FacebookLogin>
      </div>
    );
  }
}

export default App;
