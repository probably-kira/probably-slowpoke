define(
    ['pixi'],
    function( PIXI ) {
        var loader = new PIXI.AssetLoader([
            "/textures/Walkways/walkway2W.png",
            "/textures/Other/far_background.png",
            "/textures/Other/bunny.png",
            '/textures/Walkways/Walkway1W.png',
            "/textures/Walkways/Walkway2W.png",
			"/textures/Walkways/Walkway1E.png"
            ]);

        return loader;
    }
);