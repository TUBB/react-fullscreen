import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import FullScreen, { isFullScreen, fullScreenSupported } from 'react-request-fullscreen';
import logo from './logo.svg';
import './App.css';
import User from './User'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFullScreen: false,
    }
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Browser support fullscreen feature: {`${fullScreenSupported()}`}</p>
        <p>Browser is fullscreen: {`${isFullScreen()}`}</p>
        <FullScreen ref={ref => this.fullScreenRef = ref} onFullScreenChange={isFullScreen => {
          this.setState({
            isFullScreen,
          })}}>
          <div 
            onClick={() => this.fullScreenRef.fullScreen()} 
            style={{cursor: 'pointer'}}>
            {!this.state.isFullScreen ? 'Request' : 'Exit'}
          </div>
        </FullScreen>
        
        <FullScreen ref={ref => this.elFullScreenRef = ref}>
          <div 
            ref={ref => this.elRef = ref} 
            onClick={() => this.elFullScreenRef.fullScreen(this.elRef)} 
            style={{
              cursor: 'pointer', 
              paddingTop: 10,
              color:'red',
            }}>
              {!this.state.isFullScreen ? 'Request by Element' : 'Exit by Element'}
            </div>        
          </FullScreen>
          <FullScreen></FullScreen>
          <br/>
          <a href='#' onClick={() => {
            ReactDOM.render(<User />, document.getElementById('root'));
          }}>User Page</a><br/>
          <a href='https://github.com/TUBB/react-fullscreen'>GITHUB</a>
      </div>
    );
  }
}

export default App;
