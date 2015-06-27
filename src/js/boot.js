var bootState = {
  create: function () {
    //Start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Set World Bounds
    game.world.setBounds(0, 0, 800, 1290);

    //Call the load state
    game.state.start('load');
  }
};
