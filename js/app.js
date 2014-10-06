<<<<<<< HEAD
// Had trouble with the tally system. I needed it to loop through each if statement and check the clicked element
// against all the winning combinations then increase the counter by 1. Instead, it would loop through and if it
// found one, it would end. Lets say I clicked data-id="1". The function would loop through and search the winning
// arrays for 1. If it was there, increase the counter by 1. I realised I didn't have everything sorted out in my loop.
// I needed a way to clear the clicked array after every loop, otherwise the counter would be increased again:
// 1. I click space 1.
// 2. Counter containing 1 increased by 1
// 3. I click space 2.
// 4. Counter containing 1,2 increased again by 1.
// 5. Bad programming. Shame....

// I created a for loop to check each array against the clicked array. How can this be done more good???? Fuck!



// Everything starts here
var start = function(){
  console.log("Window done loading page");
  styleListElements();
  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};


// Track how many moves have been played
var moveCounter = 0;

// Create a counter for each winning combo
var player1counter1 = 0;
var player1counter2 = 0;
var player1counter3 = 0;
var player1counter4 = 0;
var player1counter5 = 0;
var player1counter6 = 0;
var player1counter7 = 0;
var player1counter8 = 0;

var player2counter1 = 0;
var player2counter2 = 0;
var player2counter3 = 0;
var player2counter4 = 0;
var player2counter5 = 0;
var player2counter6 = 0;
var player2counter7 = 0;
var player2counter8 = 0;

// Will be changed when the game ends. The value can be used in a loop
// 1 = player 1 won
// 2 = player 2 won
// 3 = tie game
var gameOver = 0;

// This is the player's clicked array
var player1Clicked = [];
var player2Clicked = [];

// Winning combinations
var arr = [[1, 2, 3],
          [4,5,6],
          [7,8,9]];



// Logic happens automagically from here
=======
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
>>>>>>> 18863636d2dead7729ba50f6fe53a77f20ea8b36

var styleListElements = function(){
  var list_items = document.querySelectorAll(".squares");
    for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].addEventListener("click", selectItem);
  }
};

<<<<<<< HEAD
var selectItem = function( event ){
    //console.log(getPlayer());
var clickedItem = this.getAttribute('data-id');
  // console.log("Clicked item:" + this.innerHTML + ". Event:" + event);
    if(this.classList.contains("selected") || gameOver > 0){
      console.log("Stop");
    }
   else{
    if (moveCounter % 2 === 0){
      this.classList.add("selected", "player1");
      player1Clicked.push(parseInt(clickedItem));
      document.querySelector("#currentPlayer").innerHTML = "<p class='player2'><span></span><br>Player 2</p>";
      moveCounter ++;
      console.log("Player 1's clicked squares: " + player1Clicked);
      return checkWinner("player1");
=======
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
>>>>>>> 18863636d2dead7729ba50f6fe53a77f20ea8b36

    }
    else{
      this.classList.add("selected", "player2");
<<<<<<< HEAD
      player2Clicked.push(parseInt(clickedItem));
      document.querySelector("#currentPlayer").innerHTML = "<p class='player1'><span></span><br>Player 1</p>";
      moveCounter ++;
      console.log("Player 2's clicked squares: " + player2Clicked);
      return checkWinner("player2");
    }
  }
};
=======
      player2Clicked.push(this.getAttribute('id'));
      document.querySelector("#currentPlayer").innerHTML = "<p class='player1'><span></span><br>Player 1</p>";
      counter ++;
      console.log(player2Clicked);
    }
   }

   checkWinner();
};



>>>>>>> 18863636d2dead7729ba50f6fe53a77f20ea8b36
var resetButtonHandler = function() {
  var list_items = document.querySelectorAll(".squares");
    for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].classList.remove("selected" , "player1", "player2");
  }
    document.querySelector("#currentPlayer").innerHTML = "<p>Click a square to start a game!</p>";
<<<<<<< HEAD

    moveCounter = 0;
    player1Clicked = [];
    player2Clicked = [];
    gameOver = 0;
    player1counter1 = 0;
    player1counter2 = 0;
    player1counter3 = 0;
    player1counter4 = 0;
    player1counter5 = 0;
    player1counter6 = 0;
    player1counter7 = 0;
    player1counter8 = 0;
    player2counter1 = 0;
    player2counter2 = 0;
    player2counter3 = 0;
    player2counter4 = 0;
    player2counter5 = 0;
    player2counter6 = 0;
    player2counter7 = 0;
    player2counter8 = 0;

    console.log("Game has been reset");
};


//console.log(check.sort()); because I confused myself at one point
var checkWinner = function(a){


  if (a === "player1"){
    for (var i = 0; i < player1Clicked.length; i++) {
      if (arr[0].indexOf(player1Clicked[i]) > -1) {
        player1counter1++;
        console.log("Added a point to counter 1");
      } else {
        console.log("No counter added for counter 1");
      }
    }

    for (var i = 0; i < player1Clicked.length; i++) {
      if (arr[1].indexOf(player1Clicked[i]) > -1) {
        player1counter2++;
        console.log("Added a point to counter 2");
      } else {
        console.log("No counter added for counter 2");
      }
    }

    for (var i = 0; i < player1Clicked.length; i++) {
      if (arr[2].indexOf(player1Clicked[i]) > -1) {
        player1counter3++;

        console.log("Added a point to counter 3");

      } else {
        console.log("No counter added for counter 3");
      }
      console.log("Player 1 counter 1: " + player1counter1);
      console.log("Player 1 counter 2: " + player1counter2);
      console.log("Player 1 counter 3: " + player1counter3);
      checkCounter();
      console.log("");
      return player1Clicked = [];
    }
  } else {
    for (var i = 0; i < player2Clicked.length; i++) {
      if (arr[0].indexOf(player2Clicked[i]) > -1) {
        player2counter1++;
        console.log("Added a point to counter 1");
      } else {
        console.log("No counter added for counter 1");
      }
    }

    for (var i = 0; i < player2Clicked.length; i++) {
      if (arr[1].indexOf(player2Clicked[i]) > -1) {
        player2counter2++;
        console.log("Added a point to counter 2");
      } else {
        console.log("No counter added for counter 2");
      }
    }
    for (var i = 0; i < player2Clicked.length; i++) {
      if (arr[2].indexOf(player2Clicked[i]) > -1) {
        player2counter3++;
        console.log("Added a point to counter 3");

      } else {
        console.log("No counter added for counter 3");
      }
      console.log("Player 2 counter 1: " + player2counter1);
      console.log("Player 2 counter 2: " + player2counter2);
      console.log("Player 2 counter 3: " + player2counter3);
      checkCounter();
      console.log("");
      return player2Clicked = [];
    }

  }

};
var checkCounter = function(){
  console.log("Checking for a winner....");
  if (player1counter1 === 3 || player1counter2 === 3 || player1counter3 === 3 || player1counter4 === 3 || player1counter5 === 3 || player1counter6 === 3 || player1counter7 === 3 || player1counter8 === 3){
    console.log("Player 1 wins! :)");
    gameOver = 1;
    }
  else if (player2counter1 === 3 || player2counter2 === 3 || player2counter3 === 3 || player2counter4 === 3 || player2counter5 === 3 || player2counter6 === 3 || player2counter7 === 3 || player2counter8 === 3){
    console.log("Player 2 wins! :)");
    gameOver = 2;
  } else if (moveCounter === 9){
    gameOver = 3;
    console.log("Tie game....ohhhhhhhhh :(");
  }
  else{
    console.log("No winner yet :(");
  }
};
=======
    counter = 0;
    player1Clicked = [];
    player2Clicked = [];


  console.log("reset");
};















>>>>>>> 18863636d2dead7729ba50f6fe53a77f20ea8b36
