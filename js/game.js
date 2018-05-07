window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-world', { preload: preload, create: create, update: update });
  var platforms;
  var controls;
  var player;
  var ground;
  var platforms;
  var hittingPlatform;

  function preload() {
    game.load.image('player', 'assets/player.png');
    game.load.image('background', 'assets/background.png');
    game.load.image('mushroom', 'assets/mushroom.png');
    game.load.image('rabbit', 'assets/rabbit.png');
    game.load.image('queen', 'assets/queen.png');
    game.load.image('platforms', 'assets/platforms.png');
    game.load.image('ground', 'assets/ground.png');
    game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  function create() {
    game.add.sprite()
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 64, 'ground');  //Place an object called 'ground' at the location indicated
    ground.scale.setTo(2,2);  //Double the size of the ground object
    ground.body.immovable = true;  //The ground object will not allow physics events to move it
    var platforms = platforms.create(400, 400, 'platforms');
    ledge.body.immovable = true;
    platforms = platforms.create(-150, 250, 'platforms');
    ledge.body.immovable = true;
    player = game.add.sprite(32, game.world.height - 150, 'player');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    var hittingPlatform = game.physics.arcade.collide(player, platforms);
    controls = game.input.keyboard.addKeys
  {
    'jump' ; Phaser.KeyCode.W,
    'left' ; Phaser.KeyCode.A,
    'right'; Phaser.KeyCode.D
  }

  }

  function update() {

  }
};
