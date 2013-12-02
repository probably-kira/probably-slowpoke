define(
	['entity'],
	function(Entity) {
		var hero = new Entity({
			width: 150,
			height: 122,
			posX: 84,
			posY: 84,
			texture: "/textures/Other/bunny.png"
		});
		
		return hero;
	}
);