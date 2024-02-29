export const tryToMovePlayer = (keysMap, playerAnimatedSprite, app, delay) => {
	let isMoving = false
	const speed = 4
	if (keysMap['ArrowLeft']) {
		playerAnimatedSprite.position.x -= delay * speed
		playerAnimatedSprite.scale.x = 1
		isMoving = true
	}
	if (keysMap['ArrowRight']) {
		playerAnimatedSprite.position.x += delay * speed
		playerAnimatedSprite.scale.x = -1
		isMoving = true
	}
	if (keysMap['ArrowUp']) {
		playerAnimatedSprite.position.y -= delay * speed
		isMoving = true
	}
	if (keysMap['ArrowDown']) {
		playerAnimatedSprite.position.y += delay * speed
		isMoving = true
	}
	if (playerAnimatedSprite.position.x < 0) {
		playerAnimatedSprite.position.x = app.view.width
	} else if (playerAnimatedSprite.position.x > app.view.width) {
		playerAnimatedSprite.position.x = 0
	}
	if (playerAnimatedSprite.position.y < 0) {
		playerAnimatedSprite.position.y = app.view.height
	} else if (playerAnimatedSprite.position.y > app.view.height) {
		playerAnimatedSprite.position.y = 0
	}
	if (isMoving) {
		playerAnimatedSprite.play()
	} else {
		playerAnimatedSprite.stop()
	}
}
