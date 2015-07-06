var player;

var platforms;

var cursors;

var snow;
var snowArray = [];
var texture1;
var texture2;
var texture3;

var stars;

var score = 0;
var scoreText;

var robot;
var explosions;

var x;
var y;

var playState = {

  create: function () {

    game.world.setBounds(0, 0, 800, 2000);

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background and texture
    //game.add.sprite(0, 0, 'sky');
    snow = game.add.sprite(0, 0, 'snow');
    snow.alpha = .3;
    texture1 = game.add.renderTexture(800, 2000, 'texture1');
    texture2 = game.add.renderTexture(800, 2000, 'texture2');
    texture3 = game.add.renderTexture(800, 2000, 'texture3');
    game.add.sprite(0, 0, texture1);
    game.add.sprite(0, 0, texture2);
    game.add.sprite(0, 0, texture3);

    var texture = texture1;
    var speed = 4;
    for (var i = 0; i < 300; i++)
    {
      if (i == 100) {
            speed = 6;
            texture = texture2;
      }
      else if (i == 200) {
        speed = 7;
        texture = texture3;
      }

      snowArray.push( { x: game.world.randomX, y: game.world.randomY, speed: speed, texture: texture });
    }
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.physicsGroup();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 40, 'platform');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // Randomly generates platforms
    var width = 800;
    var height = 8000;
    var x = 0;
    var y = height - 220;
    var platformWidth = 200;

    while(y > 200) {
      var ledge = platforms.create(x, y, 'platform');
      ledge.body.immovable = true;
      ledge.body.allowGravity = false;

      var center = width / 2;

      if(x > center) {
        x = Math.random() * center;
      }
      else {
        x = center + Math.random() * (center - platformWidth);
      }
      y = y - 200 - 100 * Math.random();
    }


    /*//  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(400, 150, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-100, 350, 'ground');
    ledge.body.immovable = true;*/


    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    // orginal bounce = .02;
    player.body.bounce.set(1);
    player.body.maxVelocity.setTo(500);
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    player.body.checkCollision.right = false;
    player.body.checkCollision.left = false;
    player.body.checkCollision.up = false;

    //  Our two animations, walking left and right.

    player.animations.add('left', [10], 10, true);
    player.animations.add('right', [3], 10, true);

    //Camera follows player
    game.camera.follow(player);



    //  Add robot to screen

    //game.time.events.repeat(Phaser.Timer.SECOND, 20, resurrect, this);
    robot = game.add.physicsGroup(Phaser.Physics.ARCADE);
    robot.enableBody = true;

    //   Moves robots
    for (var i = 0; i < 20; i++)
    {
      var moveRobot = robot.create(game.rnd.integerInRange(100, 700), game.rnd.integerInRange(32, 200), 'robot');
      moveRobot.body.velocity.set(game.rnd.integerInRange(-200, 200), game.rnd.integerInRange(-200, 200));
    }

    robot.setAll('body.collideWorldBounds', true);
    robot.setAll('body.bounce.x', 1);
    robot.setAll('body.bounce.y', 1);

    //  An explosion pool
    explosions = game.add.group();
    explosions.enableBody = true;
    explosions.physicsBodyType = Phaser.Physics.ARCADE;
    explosions.createMultiple(30, 'explosion');
    explosions.setAll('anchor.x', 0.5);
    explosions.setAll('anchor.y', 0.5);
    explosions.forEach( function(explosion) {
    explosion.animations.add('explosion');
    });

    //  Finally some stars to collect
    stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    //  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

  },

  update: function () {

    for (var i = 0; i < 300; i++)
    {
      //  Update the stars y position based on its speed
      snowArray[i].y += snowArray[i].speed;

      if (snowArray[i].y > 2000) {
        //  Off the bottom of the screen? Then wrap around to the top
        snowArray[i].x = game.world.randomX;
        snowArray[i].y = -32;
      }

      if (i == 0 || i == 100 || i == 200) {
        //  If it's the first star of the layer then we clear the texture
        snowArray[i].texture.renderXY(snow, snowArray[i].x, snowArray[i].y, true);
      }
      else {
        //  Otherwise just draw the star sprite where we need it
        snowArray[i].texture.renderXY(snow, snowArray[i].x, snowArray[i].y, false);
      }
    }
    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(player, robot, this.collectRobot);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
    //game.physics.arcade.overlap(player, robot, this.collectRobot, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 7;
    }

    //  Allow the player to jump if they are touching the ground.
    /*if (cursors.down.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
        player.angle = 20;
    }
    else if (cursors.down.isDown)
    {
      player.body.velocity.y = 450;
    }
    else {
      player.animations.stop();
      player.frame = 4;
      player.angle = 0;
    }*/
    if (cursors.down.isDown) {
      player.body.velocity.y = 9000;
      //player.angle = 180;
    }
    else if (cursors.down.isUp && player.body.touching.down)
    {
      player.body.velocity.y = -400;
      //player.angle = 0;
    }

  },

  /*resurrect: function () {

    //  Get a dead item
    var item = robot.getFirstDead();

    if (item)
    {
        //  And bring it back to life
        item.reset(game.world.randomX, game.world.randomY);

        //  This just changes its frame
        item.frame = game.rnd.integerInRange(0, 36);
    }

  },*/

  collectRobot: function (player, robot) {
    var explosion = explosions.getFirstExists(false);
    explosion.reset(robot.body.x + robot.body.halfWidth, robot.body.y + robot.body.halfHeight);
    explosion.body.velocity.y = robot.body.velocity.y;
    //higher alpha->brighter explosion
    explosion.alpha = 0;
    game.add.tween(explosion).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    explosion.play('explosion');
    // Removes the robot from the screen
    robot.kill();
    //  Add and update the score
    score += 20;
    scoreText.text = 'Score: ' + score;

  },

  collectStar: function (player, stars) {

    // Removes the star from the screen
    stars.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

  },

  render: function () {

    //game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.text('Score: ' + score, 32, 550);
    game.debug.text('Killer Robots Left', 32, 32);
    game.debug.text('Living: ' + robot.countLiving() + '   Dead: ' + robot.countDead(), 32, 64);
    if (robot.countLiving() === 0) {
      game.state.start('win');
    }
  }
}
