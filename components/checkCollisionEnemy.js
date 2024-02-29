export const checkCollisionEnemy = (playerSpite, enemySpite) => {
	return enemySpite.getBounds().intersects(playerSpite.getBounds())
}
