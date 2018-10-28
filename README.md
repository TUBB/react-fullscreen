# react-request-fullscreen 
Request fullscreen feature for browsers. used as a react component.

## npm install
```script
npm i react-request-fullscreen
```

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
After that, use the [FulllScreen](https://github.com/TUBB/react-fullscreen/blob/master/src/FullScreen.js) refs(`fullScreen` method) to request or exit fullscreen feature for browsers.
```javascript
<FullScreen ref='fullScreenRef' onFullScreenChange={isFullScreen => {
    this.setState({
    isFullScreen,
    })}}>
    <div 
        onClick={() => this.refs.fullScreenRef.fullScreen()} 
        style={{cursor: 'pointer'}}>
        {!this.state.isFullScreen ? '开启全屏' : '关闭全屏'}
    </div>
</FullScreen>
```

## API
`FullScreen.fullScreen()` request or exit fullscreen feature.
`FullScrren.fullScreenSupported()` whether fullscreen feature is supported for the browser.

## License
MIT