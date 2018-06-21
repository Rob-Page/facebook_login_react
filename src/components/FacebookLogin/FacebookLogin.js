import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookAuth from 'react-facebook-auth';
import MyButton from './MyButton';

class FacebookLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
  authenticate = (response) => {
    console.log(response);
    // You can also grab the picture etc here
    // Api call to server so we can validate the token
  };
  render() {
    return (
      <div>
        <h1>Facebook Auth</h1>
        <FacebookAuth
          appId="368173613704409"
          callback={this.authenticate}
          component={MyButton}/>
        
      </div>
    )}
  }

  
  export default FacebookLogin;