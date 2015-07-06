var winState = {
  create: function() {
    var winLabel = game.add.text(300, 400, 'YOU WIN', {font: '50px Arial', fill: 'gold'});
    var startLabel = game.add.text(300, 300, 'Press "W" to play again', {font: '25px Arial', fill: 'purple'});

    var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wKey.onDown.addOnce(this.restart, this);
  },
  restart: function () {
    game.state.start('menu');
  }
}
