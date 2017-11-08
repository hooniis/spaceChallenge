BasicGame.MainMenu = function (game) {
 //** this.music = null;
  this.playButton = null;
};

BasicGame.MainMenu.prototype = {
  create: function () {
    this.add.sprite(0, 0, 'titlepage');
	intro = this.game.add.audio('intro'); /////** 시작 전 배경음악
	intro.play(); //** 시작 전 배경음악 재생
    //this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 50, "Z 또는 클릭하면 게임을 시작합니다", { font: "30px", fill: "#FFFFFF"});
    //this.loadingText.anchor.setTo(0.5, 0.5);
    //this.add.text(this.game.width / 2, this.game.height - 60, "삼육대학교 컴퓨터학부 게임프로그래밍 Final Project", { fontSize: "18px", fill: "#FFFFFF", align: "center"}).anchor.setTo(0.5, 0.5);
    //this.add.text(this.game.width / 2, this.game.height - 30, "2012335052 이성훈, 2012335704 이영재", { fontSize: "18px", fill: "#FFFFFF", align: "center"}).anchor.setTo(0.5, 0.5);
  },

  update: function () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.startGame();
    }
  },

  startGame: function (pointer) {
    this.state.start('Game');
	intro.destroy(); //**시작함과 동시에 시작 전 배경음악 종료 (게임 중 배경음악 재생 위해)
  }
};
