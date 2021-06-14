class Game {
  constructor() {
  this.player1 = new Player('Sir Squeaken');
  this.player2 = new Player('Sir Floofintail');
  this.turn = this.player1;
  this.gameBoard = [null, null, null, null, null, null, null, null, null];
  }
  toggleTurn() {
    if(this.player1 === this.turn) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }
  // winAGame() {
  //   for(var i = 0; i < this.gameBoard.length; i++) {
  //     this.gameBoard[i] =
  //   }
  //   if(this.player1) {
  //   player1.wins++
  //   } else if(this.player2) {
  //   player2.wins++
  //   }
  // }
};
