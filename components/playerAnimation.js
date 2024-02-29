export const createPlayerAnimation = () => {
	const keyFramesCount = 8
	const keyFrames = []
	for (let i = 1; i <= keyFramesCount; i++) {
		keyFrames.push(PIXI.Texture.from(`../resources/player_walking_${i}.png`))
	}
	return new PIXI.AnimatedSprite(keyFrames)
}
