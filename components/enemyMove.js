export const tryToMoveEnemy = (enemy, player, delay) => {
	enemy.play()
	const speed = 1
	const playerBounds = player.getBounds()
	const enemyBounds = enemy.getBounds()
	if (playerBounds.x > enemyBounds.x) {
		enemy.position.x += delay * speed
		if (playerBounds.x > enemyBounds.x + enemyBounds.width) {
			enemy.scale.x = 1
		}
	} else {
		enemy.position.x -= delay * speed
		if (enemyBounds.x > playerBounds.x + playerBounds.width) {
			enemy.scale.x = -1
		}
	}
	if (playerBounds.y > enemyBounds.y) {
		enemy.position.y += delay * speed
	} else {
		enemy.position.y -= delay * speed
	}
}
