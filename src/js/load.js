var loadState = {

  preload: function () {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('snow', 'assets/snow.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/diamond.png');
    game.load.image('platform', 'assets/burger.png');
    game.load.image('robot', 'assets/robot.png', 32, 48);
    game.load.image('explosion', 'assets/explosion.png', 32, 48);
    game.load.spritesheet('dude', 'assets/bull-sprite.png', 36 ,52);

  },

  create: function() {
    game.state.start('menu');
  }

};
