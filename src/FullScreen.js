import React, { Component } from 'react'
import PropTypes from 'prop-types';

const vendors = ['', 'webkit', 'moz']

export default class FullScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.children || ''
  }

  componentDidMount() {
    this._watchFullScreenChange()
  }

  componentWillUnmount() {
    this._unwatchFullScreenChange()
  }

  fullScreenSupported() {
    return !!(document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled);
  }

  fullScreen(element) {
    if (!this.fullScreenSupported()) {
      this._onFullScreenError(new Error('fullscreen is not supported'))
    } else {
      if (!element) {
        element = document.documentElement
      }
      if (!this._fullScreenElement()) {
        if(element.requestFullscreen) {
          element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if(element.msRequestFullscreen){
          element.msRequestFullscreen();
        } else if(element.webkitRequestFullscreen) {
          element.webkitRequestFullScreen();
        }
      } else {
        this._exitFullScreen()
      }
    }
  }

  _exitFullScreen() {
    if (this._fullScreenElement()) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  _fullScreenElement() {
    const el = document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    return !!el
  }

  _watchFullScreenChange() {
    for(let i = 0, len = vendors.length; i < len; ++i) {
      document.addEventListener(vendors[i] + 'fullscreenchange', this._onFullScreenChange.bind(this))
      document.addEventListener(vendors[i] + 'fullscreenerror', this._onFullScreenError.bind(this))
    }
    // MS uses different casing:
    document.addEventListener('MSFullscreenChange', this._onFullScreenChange.bind(this))
    document.addEventListener('MSFullscreenError', this._onFullScreenError.bind(this))
  }

  _unwatchFullScreenChange() {
    for(let i = 0, len = vendors.length; i < len; ++i) {
      document.removeEventListener(vendors[i] + 'fullscreenchange', this._onFullScreenChange.bind(this))
      document.removeEventListener(vendors[i] + 'fullscreenerror', this._onFullScreenError.bind(this))
    }
    // MS uses different casing:
    document.removeEventListener('MSFullscreenChange', this._onFullScreenChange.bind(this))
    document.removeEventListener('MSFullscreenError', this._onFullScreenError.bind(this))
  }

  _onFullScreenChange() {
    if(!!this.props.onFullScreenChange) {
      this.props.onFullScreenChange(this._fullScreenElement())
    }
  }

  _onFullScreenError(error = new Error('error')) {
    if(!!this.props.onFullScreenError) {
      this.props.onFullScreenError(error)
    }
  }
}

FullScreen.propTypes = {
  onFullScreenChange: PropTypes.func,
  onFullScreenError: PropTypes.func,
}