import FullScreen from './FullScreen'
import { isFullScreen as full, fullScreenSupported as supported } from './utils'
export function isFullScreen() {
    return full()
}
export function fullScreenSupported() {
    return supported()
}
export default FullScreen