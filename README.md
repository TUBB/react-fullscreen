# react-request-fullscreen 
Request fullscreen feature for browsers, used as a react component.

## npm install
```script
npm i react-request-fullscreen
```

## Demo
[Example](http://tubb.github.io/react-fullscreen/example.html)

## Usage
[FulllScreen](https://github.com/TUBB/react-fullscreen/blob/master/src/FullScreen.js) is a react component, so you can do like this.
```javascript
import FullScreen from 'react-request-fullscreen';
```
```javascript
render() {
    return (
        <FullScreen />
    );
}
```
After that, use the [FulllScreen](https://github.com/TUBB/react-fullscreen/blob/master/src/FullScreen.js) refs(`fullScreen()`) to request or exit fullscreen feature for browsers.
```javascript
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
```
Please see [Demo](https://github.com/TUBB/react-fullscreen/blob/master/src/example/App.js) project for detail.

## API
- `FullScreen.fullScreen(element?: HTMLElement)` request or exit fullscreen feature.
- `fullScreenSupported()` whether fullscreen feature is supported for the browser.
- `isFullScreen()` the browser is fullscreen or not.

## Note
Most code is come from [chrisdickinson/fullscreen](https://github.com/chrisdickinson/fullscreen)

## License
[MIT](https://opensource.org/licenses/MIT)
