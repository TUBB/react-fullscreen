import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { _isFullScreen as isFullScreen, _fullScreenSupported as fullScreenSupported } from './utils'

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

  fullScreen(element) {
    if (fullScreenSupported()) {
      if (!isFullScreen()) {
        if (!element) {
          element = document.documentElement
        }
        this._requestFullScreen(element)
      } else {
        this._exitFullScreen()
      }
    } else {
      this._onFullScreenError(new Error('fullscreen is not supported'))
    }
  }

  _requestFullScreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen()
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if(element.msRequestFullscreen){
      element.msRequestFullscreen()
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen()
    }
  }

  _exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
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
    if(this.props.onFullScreenChange) {
      this.props.onFullScreenChange(isFullScreen())
    }
  }

  _onFullScreenError(error = new Error('error')) {
    if(this.props.onFullScreenError) {
      this.props.onFullScreenError(error)
    }
  }
}

FullScreen.propTypes = {
  onFullScreenChange: PropTypes.func,
  onFullScreenError: PropTypes.func,
}