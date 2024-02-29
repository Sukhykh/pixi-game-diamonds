export const createMainScene = startGameText => {
	const mainScene = new PIXI.Container()
	mainScene.addChild(startGameText)
	return mainScene
}
