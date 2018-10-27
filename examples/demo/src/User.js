import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from './App'

class User extends Component {
  render() {
    return (
      <div style={{
        textAlign: 'center', 
        paddingTop: 30,
        }}>
        <p>User Page.</p>
        <a href='#' onClick={() => {
          ReactDOM.render(<App />, document.getElementById('root'));
        }}>返回</a>
      </div>
    );
  }
}

export default User;
