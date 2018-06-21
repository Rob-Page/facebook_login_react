import React, {Component} from 'react';

class MyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
  render() {
    return (


        <button onClick={this.props.onClick}>
    Login with facebook
  </button>
    )}
  }

  export default MyButton;