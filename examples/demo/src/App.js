import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import FullScreen from 'react-fullscreen';
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
        <FullScreen ref='fullScreenRef' onFullScreenChange={isFullScreen => {
          this.setState({
            isFullScreen,
          })}}>
          <div 
            onClick={() => this.refs.fullScreenRef.launchFullScreen()} 
            style={{cursor: 'pointer'}}>
            {!this.state.isFullScreen ? '开启全屏' : '关闭全屏'}
          </div>
        </FullScreen>
        
        <FullScreen ref='elFullScreenRef'>
          <div 
            ref='elRef' 
            onClick={() => this.refs.elFullScreenRef.launchFullScreen(ReactDOM.findDOMNode(this.refs.elRef))} 
            style={{
              cursor: 'pointer', 
              paddingTop: 30,
              color:'red',
            }}>
              {!this.state.isFullScreen ? '具体Element开启全屏' : '具体Element关闭全屏'}
            </div>        
          </FullScreen>
          <FullScreen></FullScreen>
          <br/>
          <a href='#' onClick={() => {
            ReactDOM.render(<User />, document.getElementById('root'));
          }}>User Page</a><br/>
          <a href='https://www.github.com'>GITHUB</a>
      </div>
    );
  }
}

export default App;
