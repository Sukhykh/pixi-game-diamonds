import { gameTextOptions } from '../constants/index.js'

export const createNewGameText = app => {
	const style = new PIXI.TextStyle(gameTextOptions)
	const newGameText = new PIXI.Text('Start New Game', style)
	newGameText.anchor.set(0.5)
	newGameText.x = app.view.width / 2
	newGameText.y = app.view.height / 2 + 50
	newGameText.eventMode = 'static'
	newGameText.cursor = 'pointer'
	return newGameText
}
