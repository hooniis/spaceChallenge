BasicGame.Preloader = function (game) {
  this.background = null;
  this.preloadBar = null;
};

BasicGame.Preloader.prototype = {
  preload: function () {
	  
	this.stage.backgroundColor = '#2d2d2d';

    this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
    this.add.text(this.game.width / 2, this.game.height / 2 - 30, "LODING...", { font: "32px", fill: "#FFFFFF" }).anchor.setTo(0.5, 0.5);

    this.load.setPreloadSprite(this.preloadBar); //load될때마다 채워진다

		this.game.load.image('titlepage', './assets/spacechallenge.jpg'); /////타이틀 페이지
		this.game.load.spritesheet('ship', './assets/ship.png', 32, 32);
		this.game.load.spritesheet('explosion', './assets/explosion.png', 32, 32);
		this.game.load.image('stars', './assets/starfield.jpg');
		this.game.load.image('stone', './assets/stone.png');
		this.game.load.image('timeItem', './assets/time.png');
		this.game.load.image('boomitem', './assets/boomitem.png');
		this.game.load.audio('timeitemsound', './assets/timeitem.wav'); ////타임아이템 먹을때 소리
		this.game.load.audio('bgm','assets/bgm.mp3'); /////게임중 배경 음악
		this.game.load.audio('intro','./assets/intro.mp3'); /////시작 전 배경 음악
		this.game.load.audio('explosionsound', './assets/explosion.mp3'); /////죽을때 소리
		this.game.load.audio('boomitemsound', './assets/boomitem.wav'); /////별먹을때 소리
  },

  create: function () {
    this.preloadBar.cropEnabled = false;
  },

  update: function () {
      this.state.start('MainMenu');
  }
};
