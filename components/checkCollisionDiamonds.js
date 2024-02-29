export const checkCollisionDiamonds = (playerSpite, diamonds, cb) => {
	for (const diamond of diamonds.children) {
		if (diamond.getBounds().intersects(playerSpite.getBounds())) {
			diamonds.removeChild(diamond)
			return cb()
		}
	}
}
