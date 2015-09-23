var menuState = {
  create: function () {
    //Here displays the name of the game.
    //1st two parameters are x, y positional values -->
    //Then actual text -> Font -> Font color
    var nameLabel = game.add.text(300, 150, 'Minotaur vs Robots', {font: '50px Arial', fill: 'purple'});
    var startLabel = game.add.text(300, 400, 'press "W" to start', {font: '25px Arial', fill: 'gold'});
    //Define "W"
    var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    //Calls the start function
    wKey.onDown.addOnce(this.start, this);
  },
  //Start function calls the play state
  start: function () {
    game.state.start('play');
  }
};
