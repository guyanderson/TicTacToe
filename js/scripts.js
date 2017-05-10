// //business logic
// function Player() {
//   this.playerX = playerX;
//   this.playerO = playerO;
      	this.WinPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];




// user interface logic
$(document).ready(function() {
var turn = 0;
var icon = 'X';
var playerX = [];
var playerO = [];

$('.cell').click(function(){
  if($(this).html()==""){
    if (turn%2!==0) {
      icon = 'O';
      $(this)[0].id;
      playerO.push($(this)[0].id);
    } else {
      icon = 'X';
      $(this)[0].id;
      playerX.push($(this)[0].id);
    }
    $(this).html(icon);
    // checkWin in here
    turn++
  }
});
});
