import { gameTextOptions } from '../constants/index.js'

export const createGameSceneText = (positionX, positionY, text) => {
	const style = new PIXI.TextStyle(gameTextOptions)
	const startGameText = new PIXI.Text(text, style)
	startGameText.x = positionX
	startGameText.y = positionY
	return startGameText
}
