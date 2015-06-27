//The first two integers are the game screen dimensions (x, y).
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

//Add each state. Casual name when we call it and an official name.
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

//After all the states are added, we start the game by calling the boot state.

game.state.start('boot');
