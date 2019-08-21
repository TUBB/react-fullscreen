import React from 'react'

export declare function isFullScreen(): boolean
export declare function fullScreenSupported(): boolean
type Props = { 
  onFullScreenChange(fullScreen: boolean): void
  onFullScreenError(error: Error): void 
 }
declare class FullScreen extends React.Component<Props, {}> {
  fullScreen(element?: HTMLElement)
}
export default FullScreen
