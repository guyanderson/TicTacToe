// //business logic
// function Player() {
//   this.playerX = playerX;
//   this.playerO = playerO;



// user interface logic
$(document).ready(function() {
var turn = 0;
var icon = 'X';
var playerX = [];
var playerO = [];
// var square = parseInt($("div#id").val());

$('.cell').click(function(){
  if($(this).html()==""){
    if (turn%2!==0) {
      icon = 'O';
      $(this)[0].id;
    } else {
      icon = 'X';
      $(this)[0].id;
    }
    $(this).html(icon);
    // checkWin in here
    turn++
  }
  console.log($(this)[0].id);
});
});
