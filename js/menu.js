'use strict';

var menuState = {
  create: function create() {
    //Here displays the name of the game.
    //1st two parameters are x, y positional values -->
    //Then actual text -> Font -> Font color
    var nameLabel = game.add.text(300, 150, 'Minotaur vs Robots', { font: '50px Arial', fill: 'purple' });
    var startLabel = game.add.text(300, 400, 'press "W" to start', { font: '25px Arial', fill: 'gold' });
    //Define "W"
    var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    //Calls the start function
    wKey.onDown.addOnce(this.start, this);
  },
  //Start function calls the play state
  start: function start() {
    game.state.start('play');
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxTQUFTLEdBQUc7QUFDZCxRQUFNLEVBQUUsa0JBQVk7Ozs7QUFJbEIsUUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7QUFDcEcsUUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7O0FBRW5HLFFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV6RCxRQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3ZDOztBQUVELE9BQUssRUFBRSxpQkFBWTtBQUNqQixRQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUMxQjtDQUNGLENBQUMiLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtZW51U3RhdGUgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vSGVyZSBkaXNwbGF5cyB0aGUgbmFtZSBvZiB0aGUgZ2FtZS5cbiAgICAvLzFzdCB0d28gcGFyYW1ldGVycyBhcmUgeCwgeSBwb3NpdGlvbmFsIHZhbHVlcyAtLT5cbiAgICAvL1RoZW4gYWN0dWFsIHRleHQgLT4gRm9udCAtPiBGb250IGNvbG9yXG4gICAgdmFyIG5hbWVMYWJlbCA9IGdhbWUuYWRkLnRleHQoMzAwLCAxNTAsICdNaW5vdGF1ciB2cyBSb2JvdHMnLCB7Zm9udDogJzUwcHggQXJpYWwnLCBmaWxsOiAncHVycGxlJ30pO1xuICAgIHZhciBzdGFydExhYmVsID0gZ2FtZS5hZGQudGV4dCgzMDAsIDQwMCwgJ3ByZXNzIFwiV1wiIHRvIHN0YXJ0Jywge2ZvbnQ6ICcyNXB4IEFyaWFsJywgZmlsbDogJ2dvbGQnfSk7XG4gICAgLy9EZWZpbmUgXCJXXCJcbiAgICB2YXIgd0tleSA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5XKTtcbiAgICAvL0NhbGxzIHRoZSBzdGFydCBmdW5jdGlvblxuICAgIHdLZXkub25Eb3duLmFkZE9uY2UodGhpcy5zdGFydCwgdGhpcyk7XG4gIH0sXG4gIC8vU3RhcnQgZnVuY3Rpb24gY2FsbHMgdGhlIHBsYXkgc3RhdGVcbiAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBnYW1lLnN0YXRlLnN0YXJ0KCdwbGF5Jyk7XG4gIH1cbn07XG4iXX0=