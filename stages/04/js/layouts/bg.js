define(
    ['pixi'],
    function( PIXI ) {
        var width = window.innerWidth,
            height = window.innerHeight;

    	// create a texture from an image path
        var bgTexture = PIXI.Texture.fromImage("/textures/Walkways/walkway2W.png");
		var bgTexture2 = PIXI.Texture.fromImage("/textures/Other/far_background.png");
		// create a tiling sprite..
		// requires a texture, width and height
		// to work in webGL the texture size must be a power of two
		var bg1 = new PIXI.TilingSprite(bgTexture, width, 128);
        var bg2 = new PIXI.TilingSprite(bgTexture2, width, height);
        var bg = new PIXI.DisplayObjectContainer();
        var moving = false;
        bg.speed = 0;


        function kStart(stage) {
            bg.addChild(bg2);
            bg.addChild(bg1);

            bg1.position = {
                x: 0,
                y: (function() { return height - 128})()
            }

            stage.addChild(bg);

        }

        function animate() {
            /*if(moving) {
                bg.children.forEach(function(tile) {
                    tile.tilePosition.x += bg.speed;
                });   
            }*/
        }

        //register bg events
        /*document.addEventListener('keydown', function(e) { 
            var index = [39, 37].indexOf(e.keyCode);
            if (index !== -1) {
                moving = true;
                bg.speed = [-1, 1][index];
            }

        });

        document.addEventListener('keyup', function(e) {
            bg.speed = 0;
            moving = false;
        })*/

        bg.kStart = kStart;
        bg.kAnimate = animate;

        return bg;
    }
);