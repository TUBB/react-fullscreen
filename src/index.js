import FullScreen from './FullScreen'
import { _isFullScreen as full, _fullScreenSupported as supported } from './utils'
export function isFullScreen() {
    return full()
}
export function fullScreenSupported() {
    return supported()
}
export default FullScreen