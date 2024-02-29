import { gameTextOptions } from '../constants/index.js'

export const createStartGameText = app => {
	const style = new PIXI.TextStyle(gameTextOptions)
	const startGameText = new PIXI.Text('Start Game', style)
	startGameText.anchor.set(0.5)
	startGameText.x = app.view.width / 2
	startGameText.y = app.view.height / 2
	startGameText.eventMode = 'static'
	startGameText.cursor = 'pointer'
	return startGameText
}
