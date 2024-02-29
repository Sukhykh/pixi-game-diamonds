export const attachListeners = keysMap => {
	document.onkeydown = event => {
		keysMap[event.code] = true
	}
	document.onkeyup = event => {
		keysMap[event.code] = false
	}
}
