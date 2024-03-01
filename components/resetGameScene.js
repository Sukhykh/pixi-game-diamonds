import { createDiamond } from './index.js'

export const resetGameScene = (
	animatedPlayerSprite,
	animatedEnemySprite,
	diamonds,
	diamondCounterText,
	app
) => {
	animatedPlayerSprite.position.x = 44
	animatedPlayerSprite.position.y = app.view.height / 2 - 40
	animatedPlayerSprite.scale.x = -1

	animatedEnemySprite.position.x = app.view.width
	animatedEnemySprite.position.y = app.view.height / 2 - 98

	diamonds.removeChildren()
	const diamondsCount = 10
	for (let i = 0; i < diamondsCount; i++) {
		const diamond = createDiamond(app)
		diamonds.addChild(diamond)
	}
}
