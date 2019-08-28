import React from 'react'
import ReactDOM from 'react-dom'
import FullScreen, { fullScreenSupported } from '../index'
// import FullScreen, { fullScreenSupported } from 'react-request-fullscreen'
import './App.less'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFullScreen: false
    }
  }

  onFullScreenChange (isFullScreen) {
    this.setState({
      isFullScreen
    })
  }

  requestOrExitFullScreen () {
    this.fullScreenRef.fullScreen()
  }

  requestOrExitFullScreenByElement () {
    this.elFullScreenRef.fullScreen(this.elRef)
  }

  render () {
    const { isFullScreen } = this.state
    return (
      <div className='app'>
        <p>Browser support fullscreen feature: {`${fullScreenSupported()}`}</p>
        <p>Browser is fullscreen: {`${isFullScreen}`}</p>
        <FullScreen ref={ref => { this.fullScreenRef = ref }} onFullScreenChange={this.onFullScreenChange.bind(this)}>
          <div
            className='rq'
            onClick={this.requestOrExitFullScreen.bind(this)}
          >
            {!isFullScreen ? 'Request FullScreen' : 'Exit FullScreen'}
          </div>
        </FullScreen>
        <FullScreen ref={ref => { this.elFullScreenRef = ref }}>
          <div
            className='el-rq'
            ref={ref => { this.elRef = ref }}
            onClick={this.requestOrExitFullScreenByElement.bind(this)}
          >
            {!isFullScreen ? 'Request FullScreen by Element' : 'Exit FullScreen by Element'}
          </div>
        </FullScreen>
        <br />
        <a href='https://github.com/TUBB/react-fullscreen'>GITHUB</a>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
