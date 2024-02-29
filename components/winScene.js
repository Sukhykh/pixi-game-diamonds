export const createWinScene = (winGameText, newGameText) => {
	const winScene = new PIXI.Container()
	winScene.addChild(winGameText)
	winScene.addChild(newGameText)
	return winScene
}
