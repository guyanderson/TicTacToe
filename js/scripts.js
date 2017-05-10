// //business logic
// function Player() {
//   this.playerX = playerX;
//   this.playerO = playerO;
// }
//
// Player.prototype.mark = function(playerX, playerO) {
//     if (playerX) {
//     return "X";
//     } else (playerO)
//     {
//      return "O";
//     }
//   }
//
// Player.prototype.choosePlayer = function () {
//
// };
// user interface logic
$(document).ready(function() {
var turn = 0;
var icon = 'X';
var player = 'Player 1'

$('.cell').click(function(){
  if($(this).html()==""){
    if (turn%2!==0) {
      icon = "O";
      player = 'Player 2';
    } else {
      icon = 'X';
      player = 'Player 1';
    }
    $(this).html(icon);
    // checkWin();
    turn++
  }
});
});
