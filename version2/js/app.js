var start = function(){
  console.log("Window done loading page");
  styleListElements();

  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

// Variables



var counter = 0;
winCombos = [
  {0: true},
  {0: true, 1 : true, 2: true},
  {4: true, 5 : true, 6: true},
  {8: true, 7 : true, 9: true}
];
var player1Clicked = [];
var player2Clicked = [];

// to do :
// Add math.random for a computer player
// assign each winning combo to a variable and check against the picked numbers


var getPlayer = function(){
  return counter % 2 === 0 ? "X" : "O";
}

// Logic

var styleListElements = function(){
  var list_items = document.querySelectorAll(".squares");
    for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].addEventListener("click", selectItem);
  }
};

var checkWinner = function() {
  console.log(player1Clicked)
  // var squares = document.querySelectorAll(".squares");
  // var combo = [0,1,2];

  // for (var i = 0; i < squares.length; i++) {

  //   if (squares[i] === winCombos[0][0]){
  //     console.log("winner");

  //   }


  // loop over squares
  // if squares[combo[i]].classList.contains()



  for(var i=0; i < squares.length; i ++){
    console.log(i , squares[i].classList.contains("player1"));
    var player1Board = squares[i].classList.contains("player1");
    console.log (player1Board)
    if(player1Board === winCombos[0][0]){
        console.log("winner");
    }
}
}
var selectItem = function( event ){
    console.log(getPlayer());

  // console.log("Clicked item:" + this.innerHTML + ". Event:" + event);
    if(this.classList.contains("selected")){
      console.log("Stop");
    }
   else{
    if (counter % 2 ===0){
      this.classList.add("selected", "player1");
      player1Clicked.push(this.getAttribute('id'));
      document.querySelector("#currentPlayer").innerHTML = "<p class='player2'><span></span><br>Player 2</p>";
      counter ++;
      console.log(player1Clicked);

    }
    else{
      this.classList.add("selected", "player2");
      player2Clicked.push(this.getAttribute('id'));
      document.querySelector("#currentPlayer").innerHTML = "<p class='player1'><span></span><br>Player 1</p>";
      counter ++;
      console.log(player2Clicked);
    }
   }

   checkWinner();
};



var resetButtonHandler = function() {
  var list_items = document.querySelectorAll(".squares");
    for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].classList.remove("selected" , "player1", "player2");
  }
    document.querySelector("#currentPlayer").innerHTML = "<p>Click a square to start a game!</p>";
    counter = 0;
    player1Clicked = [];
    player2Clicked = [];


  console.log("reset");
};















