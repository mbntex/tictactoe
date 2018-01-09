var query = require('cli-interact').getYesNo;
var queryQuestion = require('cli-interact').question;




var ticTacToeGame = function () {

  this.status = 'playing';
  this.q = '_';
  this.w = '_';
  this.e = '_';
  
  this.a = '_';
  this.s = '_';
  this.d = '_';
  // this.row2 = this.a+'|'+this.s+'|'+this.d;
  
  this.z = ' ';
  this.x = ' ';
  this.c = ' ';
  // this.row3 = this.z+'|'+this.x+'|'+this.c;
  this.row3 = [this.z, this.x, this.c];

  
  this.turn = 'Player O';
  this.turnSymbol = 'O';
  this.instructions = '\n\nKeys To Input Your Choice: \nQWE\nASD\nZXC\n or type \'quit\'';
  this.turnsPlayed = 0;

}

ticTacToeGame.prototype.printBoard = function () {
  this.row1 = [this.q, this.w, this.e];
  this.row2 = [this.a, this.s, this.d];
  this.row3 = [this.z, this.x, this.c];
  this.board = [this.row1, this.row2, this.row3];
  this.boardStringPrint = [this.row1.join('|'), this.row2.join('|'), this.row3.join('|')];
  for (var i = 0; i < this.boardStringPrint.length; i++) {
    console.log(this.boardStringPrint[i])
  }
  // console.log(this.instructions);
  // console.log(symbolX);
  // console.log(symbolO);
}

ticTacToeGame.prototype.turnChange = function () {
  //RUN WINCKECK FIRST
  if (this.turnsPlayed === 9) { console.log('IT IS A DRAW!!!'); this.turnsPlayed = 10;}
  if (this.turn === 'Player O') { 
    this.turn = 'Player X'; 
    this.turnSymbol = 'X'; 
  } else { 
    this.turn = 'Player O'; 
    this.turnSymbol = 'O'; 
  }
}

ticTacToeGame.prototype.enterSquare = function () {
  console.log('PLAYER\'S TURN = ', this.turn);
  console.log(this.instructions);
  var square = queryQuestion('PICK YOUR SQUARE: ');
  //console.log('You answered = ', square);
    if (square === 'q' && this.q === '_') { this.q = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'w' && this.w === '_') { this.w = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'e' && this.e === '_') { this.e = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'a' && this.a === '_') { this.a = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 's' && this.s === '_') { this.s = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'd' && this.d === '_') { this.d = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'z' && this.z === ' ') { this.z = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'x' && this.x === ' ') { this.x = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'c' && this.c === ' ') { this.c = this.turnSymbol; this.turnsPlayed ++; }
    if (square === 'quit') { this.status = 'quitting'; }
}

ticTacToeGame.prototype.winCheck = function () {
  
  this.row1 = [this.q, this.w, this.e];
  this.row2 = [this.a, this.s, this.d];
  this.row3 = [this.z, this.x, this.c];
  this.board = [this.row1, this.row2, this.row3];
  //console.log('WINCHECK = ');
  for (var r = 0; r < this.board.length; r++) {
    var winTally = 0;
    //console.log(this.board[r]);
    for (var c = 0; c < this.board.length; c++) {
      if (this.board[r][c] === 'O') { winTally ++ }
      if (this.board[r][c] === 'X') { winTally -- }
      if(this.board[0][c] === 'O' && this.board[1][c] === 'O' && this.board[2][c] === 'O') {
        console.log('O WINS!!!!!!'); myGame.turnsPlayed = 10;
        return;
      }
      if(this.board[0][c] === 'X' && this.board[1][c] === 'X' && this.board[2][c] === 'X') {
        console.log('X WINS!!!!!!'); myGame.turnsPlayed = 10;
        return;
      }
    }
  // console.log('WINTALLY = ', winTally);
  if (winTally === 3) { console.log('O WINS!!!!!!'); myGame.turnsPlayed = 10; break; }
  if (winTally === -3) { console.log('X WINS!!!!!!'); myGame.turnsPlayed = 10; break; }
  }
}

ticTacToeGame.prototype.runTurn = function () {
  myGame.printBoard();
  myGame.enterSquare();
  myGame.winCheck();
  myGame.turnChange();
}


var myGame = new ticTacToeGame();


while(myGame.turnsPlayed < 10 && myGame.status === 'playing') {
  myGame.runTurn();
}










