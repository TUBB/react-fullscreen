# react-request-fullscreen 
Request fullscreen feature for browsers, used as a react component.

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
After that, use the [FulllScreen](https://github.com/TUBB/react-fullscreen/blob/master/src/FullScreen.js) refs(`fullScreen` method) to request or exit fullscreen feature for browsers.
```javascript
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
```
Please see [demo](https://github.com/TUBB/react-fullscreen/blob/master/examples/demo/src/App.js) project for detail.

## API
#### `FullScreen.fullScreen()` request or exit fullscreen feature.
#### `fullScreenSupported()` whether fullscreen feature is supported for the browser.
#### `isFullScreen()` the browser is fullscreen or not.

## Note
Most code is come from [chrisdickinson/fullscreen](https://github.com/chrisdickinson/fullscreen)

## License
[MIT](https://opensource.org/licenses/MIT)
