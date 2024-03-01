import {
	attachListeners,
	checkCollisionDiamonds,
	checkCollisionEnemy,
	createDiamond,
	createEnemyAnimation,
	createGameSceneText,
	createLossScene,
	createMainScene,
	createNewGameText,
	createPlayerAnimation,
	createStartGameText,
	createWinScene,
	resetGameScene,
	tryToMoveEnemy,
	tryToMovePlayer,
} from './components/index.js'

import { applicationOptions, scenes } from './constants/index.js'

const app = new PIXI.Application(applicationOptions)
document.body.appendChild(app.view)

let state = scenes.menu
let totalDiamonds = 0

const startGameText = createStartGameText(app)
const mainScene = createMainScene(startGameText)

const winGameText = createGameSceneText(
	app.view.width / 2,
	app.view.height / 2,
	`You won! Total Score: ${totalDiamonds}`
)
winGameText.anchor.set(0.5)
const newGameTextWin = createNewGameText(app)
const winScene = createWinScene(winGameText, newGameTextWin)

const lossGameText = createGameSceneText(
	app.view.width / 2,
	app.view.height / 2,
	`Game Over. Total Score: ${totalDiamonds}`
)
lossGameText.anchor.set(0.5)
const newGameTextLoss = createNewGameText(app)
const lossScene = createLossScene(lossGameText, newGameTextLoss)

let gameScene = new PIXI.Container()

function createGameScene(gameScene, app, lossGameText, winGameText) {
	gameScene.removeChildren()
	const player = new PIXI.Container()
	const enemy = new PIXI.Container()
	const diamonds = new PIXI.Container()
	gameScene.addChild(player)
	gameScene.addChild(enemy)
	gameScene.addChild(diamonds)

	const animatedPlayerSprite = createPlayerAnimation()
	animatedPlayerSprite.position.x = 44
	animatedPlayerSprite.position.y = app.view.height / 2 - 40
	animatedPlayerSprite.animationSpeed = 0.05
	animatedPlayerSprite.scale.x = -1
	player.addChild(animatedPlayerSprite)

	const animatedEnemySprite = createEnemyAnimation()
	animatedEnemySprite.position.x = app.view.width
	animatedEnemySprite.position.y = app.view.height / 2 - 98
	animatedEnemySprite.animationSpeed = 0.05
	enemy.addChild(animatedEnemySprite)

	const diamondsCount = 10
	for (let i = 0; i < diamondsCount; i++) {
		const diamond = createDiamond(app)
		diamonds.addChild(diamond)
	}

	const diamondCounterText = createGameSceneText(
		0,
		0,
		`Diamonds: ${totalDiamonds}`
	)
	gameScene.addChild(diamondCounterText)

	const keysMap = {}
	attachListeners(keysMap)

	return delay => {
		tryToMovePlayer(keysMap, animatedPlayerSprite, app, delay)
		tryToMoveEnemy(animatedEnemySprite, animatedPlayerSprite, delay)
		checkCollisionDiamonds(animatedPlayerSprite, diamonds, () => {
			totalDiamonds++
			diamondCounterText.text = `Diamonds: ${totalDiamonds}`
		})
		if (checkCollisionEnemy(animatedPlayerSprite, animatedEnemySprite)) {
			state = scenes.loss
			lossGameText.text = `Game Over. Total Score: ${totalDiamonds}`
			resetGameScene(
				animatedPlayerSprite,
				animatedEnemySprite,
				diamonds,
				diamondCounterText,
				app
			)
			totalDiamonds = 0
			diamondCounterText.text = `Diamonds: ${totalDiamonds}`
			app.stage.removeChild(gameScene)
		}
		if (totalDiamonds === diamondsCount) {
			state = scenes.win
			winGameText.text = `You won! Total Score: ${totalDiamonds}`
			resetGameScene(
				animatedPlayerSprite,
				animatedEnemySprite,
				diamonds,
				diamondCounterText,
				app
			)
			totalDiamonds = 0
			diamondCounterText.text = `Diamonds: ${totalDiamonds}`
			app.stage.removeChild(gameScene)
		}
	}
}

const updateScene = createGameScene(gameScene, app, lossGameText, winGameText)

startGameText.on('click', () => {
	state = scenes.game
	app.stage.removeChild(mainScene)
	app.stage.addChild(gameScene)
})

newGameTextWin.on('click', () => {
	state = scenes.game
	app.stage.removeChild(winScene)
	app.stage.addChild(gameScene)
})

newGameTextLoss.on('click', () => {
	state = scenes.game
	app.stage.removeChild(lossScene)
	app.stage.addChild(gameScene)
})

app.ticker.add(delay => {
	if (state === scenes.game) {
		updateScene(delay)
	}
	if (state === scenes.menu) {
		app.stage.addChild(mainScene)
	}
	if (state === scenes.loss) {
		app.stage.addChild(lossScene)
	}
	if (state === scenes.win) {
		app.stage.addChild(winScene)
	}
})
