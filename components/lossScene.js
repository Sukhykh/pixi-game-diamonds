export const createLossScene = (lossGameText, newGameText) => {
	const lossScene = new PIXI.Container()
	lossScene.addChild(lossGameText)
	lossScene.addChild(newGameText)
	return lossScene
}
