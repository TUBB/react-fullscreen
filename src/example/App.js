import React from 'react';
import ReactDOM from 'react-dom'
import FullScreen, { isFullScreen, fullScreenSupported } from '../index';
import './App.less';

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      isFullScreen: false,
    }
  }

  onFullScreenChange(isFullScreen) {
    this.setState({
      isFullScreen,
    })
  }

  render() {
    return (
      <div className="App">
        <p>Browser support fullscreen feature: {`${fullScreenSupported()}`}</p>
        <p>Browser is fullscreen: {`${isFullScreen()}`}</p>
        <FullScreen ref={ref => this.fullScreenRef = ref} onFullScreenChange={this.onFullScreenChange.bind(this)}>
          <div
            className="rq" 
            onClick={() => this.fullScreenRef.fullScreen()}>
            {!this.state.isFullScreen ? 'Request FullScreen' : 'Exit FullScreen'}
          </div>
        </FullScreen>
        <FullScreen ref={ref => this.elFullScreenRef = ref}>
          <div
            className="el-rq" 
            ref={ref => this.elRef = ref} 
            onClick={() => this.elFullScreenRef.fullScreen(this.elRef)}>
            {!this.state.isFullScreen ? 'Request FullScreen by Element' : 'Exit FullScreen by Element'}
          </div>        
        </FullScreen>
        <br/>
        <a href='https://github.com/TUBB/react-fullscreen'>GITHUB</a>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)