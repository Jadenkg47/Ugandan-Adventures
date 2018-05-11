window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-world', { preload: preload, create: create, update: update });
  var platforms;
  var controls;
  var player;
  var ground;
  var platforms;
  var hittingPlatform;
  var bg1, bg2;

  function preload() {
    game.load.image('player', 'assets/player.png');
    game.load.image('bg', 'assets/background.png');
    game.load.image('mushroom', 'assets/mushroom.png');
    game.load.image('rabbit', 'assets/rabbit.png');
    game.load.image('queen', 'assets/queen.png');
    game.load.image('platforms', 'assets/platforms.png');
    game.load.image('ground', 'assets/ground.png');
    game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  function create() {
    //Scrolling background
    bg1 = game.add.sprite(0,0,'bg');
    bg2 = game.add.sprite(game.width,0,'bg');

    //Adds ground
    var ground = game.add.sprite(0, game.world.height, 'ground');
    ground.y -= ground.height;
    ground.width = game.world.width;
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.body.immovable = true;

    //Platforms
    platforms = game.add.group();
    platforms.enableBody = true;
    var platforms = platforms.create(400, 400, 'platforms');
    ledge.body.immovable = true;
    platforms = platforms.create(-150, 250, 'platforms');
    ledge.body.immovable = true;

    //Player
    player = game.add.sprite(32, game.world.height - 150, 'player');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    var hittingPlatform = game.physics.arcade.collide(player, platforms);

    //Controls
    controls = game.input.keyboard.addKeys
  {
    'jump' ; Phaser.KeyCode.W,
    'left' ; Phaser.KeyCode.A,
    'right'; Phaser.KeyCode.D
  }
  }
  function update() {
      if(controls.left.isDown){
        player.body.velocity.x = -150;
        player.animations.play('left');
      } else if(controls.right.isDown){
        player.body.velocity.x = 150;
        player.animations.play('right');
      } else {
        player.animations.stop();
        player.frame = 4;
        player.body.velocity.x = 0;
        if(controls.jump.isDown && player.body.touching.down && hittingPlatform) {
          player.body.velocity.y = -350;
  }
  }
};
