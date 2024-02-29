export const createEnemyAnimation = () => {
	const keyFramesCount = 8
	const keyFrames = []
	for (let i = 1; i <= keyFramesCount; i++) {
		keyFrames.push(PIXI.Texture.from(`../resources/enemy_walking_${i}.png`))
	}
	return new PIXI.AnimatedSprite(keyFrames)
}
