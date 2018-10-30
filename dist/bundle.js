module.exports=function(e){var n={};function r(t){if(n[t])return n[t].exports;var u=n[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)r.d(t,u,function(n){return e[n]}.bind(null,u));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}([function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n._fullScreenSupported=function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)},n._isFullScreen=function(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)}},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isFullScreen=function(){return(0,u._isFullScreen)()},n.fullScreenSupported=function(){return(0,u._fullScreenSupported)()};var t=function(e){return e&&e.__esModule?e:{default:e}}(r(2)),u=r(0);n.default=t.default},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),u=r(3),l=(c(u),c(r(4))),o=r(0);function c(e){return e&&e.__esModule?e:{default:e}}var i=["","webkit","moz"],s=function(e){function n(e){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,u.Component),t(n,[{key:"render",value:function(){return this.props.children||""}},{key:"componentDidMount",value:function(){this._watchFullScreenChange()}},{key:"componentWillUnmount",value:function(){this._unwatchFullScreenChange()}},{key:"fullScreen",value:function(e){(0,o.fullScreenSupported)()?(0,o.isFullScreen)()?this._exitFullScreen():(e||(e=document.documentElement),this._requestFullScreen(e)):this._onFullScreenError(new Error("fullscreen is not supported"))}},{key:"_requestFullScreen",value:function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullScreen()}},{key:"_exitFullScreen",value:function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},{key:"_watchFullScreenChange",value:function(){for(var e=0,n=i.length;e<n;++e)document.addEventListener(i[e]+"fullscreenchange",this._onFullScreenChange.bind(this)),document.addEventListener(i[e]+"fullscreenerror",this._onFullScreenError.bind(this));document.addEventListener("MSFullscreenChange",this._onFullScreenChange.bind(this)),document.addEventListener("MSFullscreenError",this._onFullScreenError.bind(this))}},{key:"_unwatchFullScreenChange",value:function(){for(var e=0,n=i.length;e<n;++e)document.removeEventListener(i[e]+"fullscreenchange",this._onFullScreenChange.bind(this)),document.removeEventListener(i[e]+"fullscreenerror",this._onFullScreenError.bind(this));document.removeEventListener("MSFullscreenChange",this._onFullScreenChange.bind(this)),document.removeEventListener("MSFullscreenError",this._onFullScreenError.bind(this))}},{key:"_onFullScreenChange",value:function(){this.props.onFullScreenChange&&this.props.onFullScreenChange((0,o.isFullScreen)())}},{key:"_onFullScreenError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Error("error");this.props.onFullScreenError&&this.props.onFullScreenError(e)}}]),n}();n.default=s,s.propTypes={onFullScreenChange:l.default.func,onFullScreenError:l.default.func}},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("prop-types")}]);