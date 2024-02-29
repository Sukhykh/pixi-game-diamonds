export const createDiamond = app => {
	const diamond = PIXI.Sprite.from('../resources/diamond.png')
	const widthValue = app.view.width - 35
	const heightValue = app.view.height - 28
	diamond.position.x = Math.random() * widthValue
	diamond.position.y = Math.random() * heightValue
	return diamond
}
