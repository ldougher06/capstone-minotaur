'use strict';

var bootState = {
  create: function create() {
    //Start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Set World Bounds
    game.world.setBounds(0, 0, 800, 8000);

    //Call the load state
    game.state.start('load');
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9ib290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxTQUFTLEdBQUc7QUFDZCxRQUFNLEVBQUUsa0JBQVk7O0FBRWxCLFFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7OztBQUdoRCxRQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O0FBR3RDLFFBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQzFCO0NBQ0YsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJvb3RTdGF0ZSA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgLy9TdGFydCB0aGUgcGh5c2ljcyBzeXN0ZW1cbiAgICBnYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcblxuICAgIC8vU2V0IFdvcmxkIEJvdW5kc1xuICAgIGdhbWUud29ybGQuc2V0Qm91bmRzKDAsIDAsIDgwMCwgODAwMCk7XG5cbiAgICAvL0NhbGwgdGhlIGxvYWQgc3RhdGVcbiAgICBnYW1lLnN0YXRlLnN0YXJ0KCdsb2FkJyk7XG4gIH1cbn07XG4iXX0=