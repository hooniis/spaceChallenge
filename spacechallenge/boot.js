
var BasicGame = { //기호상수들
// Define motion constants
	
  
};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {
  init: function () {
    this.input.maxPointers = 1; //멀티 터치 지원하지 않을거면 최대포인터는 1개만 설정

    if (this.game.device.desktop) { //데스크톱 화면 모드
      //  If you have any desktop specific settings, they can go in here
    }
    else { //모바일 화면 모드
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
      this.scale.setMinMax(480, 260, 1024, 768);
      this.scale.forceLandscape = true;
    }
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function () {
    this.load.image('preloaderBar', './assets/preloader-bar.png');
  },

  create: function () {  //애셋이 캐시에 로드되고 게임 설정을 한다
    this.state.start('Preloader');
  }
};
