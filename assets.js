const app = new PIXI.Application({resizeTo: window});
document.body.appendChild(app.view);

const texturePromise = PIXI.Assets.load("resources/player.json");

texturePromise.then((resolvedSpritesheet) => {
	const anim = new PIXI.AnimatedSprite(resolvedSpritesheet.animations.player_walking);

	anim.animationSpeed = 0.1666;

	anim.play();

	app.stage.addChild(anim);
});
