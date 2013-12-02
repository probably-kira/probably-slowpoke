(function () {
	var stage = new PIXI.Stage(0x66FF99);
	var renderer = PIXI.autoDetectRenderer(700, 400);
	document.body.appendChild(renderer.view);
	
	// create a texture from an image path
	var texture = PIXI.Texture.fromImage("slowpoke.png");
	// create a new Sprite using the texture
	var hero = new PIXI.Sprite(texture);

	hero.position = {
		x: 100, 
		y: 100
	}
	hero.anchor = {
		x: .5, 
		y: .5
	}
		// create a texture from an image path
	var texture1 = PIXI.Texture.fromImage("pikachu.png");
	// create a new Sprite using the texture
	var hero1 = new PIXI.Sprite(texture1);

	hero1.position = {
		x: 400, 
		y: 110
	}
	hero1.anchor = {
		x: .5, 
		y: .5
	}

var _move = 0;
	(function ui() {
		Mousetrap.bind('left', function(){
			_move = -1
		})
		Mousetrap.bind('right', function(){
			_move = 1
		})
		Mousetrap.bind('left', function(){
			_move = 0
		}, 'keyup')
		Mousetrap.bind('right', function(){
			_move = 0
		}, 'keyup')
	})();

	function move() {
		if(_move) {
			hero.position.x += 3 * _move;
			hero.scale.x = _move;
			detectCollision()			
		}

	}

var eated = false;
	function detectCollision() {
		if ( !eated && hero.position.x >= 320) {
			hero1.visible = false;
			hero.scale = new PIXI.Point(3, 3)
			eated = true;
		}
	}
	
	stage.addChild(hero);
	stage.addChild(hero1);
	
	function animate() {
	
		requestAnimFrame( animate );
		move();
	
		// render the stage   
		renderer.render(stage);
	}
	requestAnimFrame( animate );
})();