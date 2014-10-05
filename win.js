/* I'm going to the gym, but if anyone solves wants to integrate the method before I finish, here's how my loop logic works:

1. Check if the square already has the class "selected"
if it doesn't go to 2, otherwise do nothing (I sent a console.log just to make sure shit was happening on the backend)

2. Check the value of playerCounter. If it is even do actions for player1 & odd for player2. Within the loop, I have playerCounter++ to increase the counter and go to the next player.

3. Grab the html div attribute "data-box-id" off the clicked element to push to a player's array. Every box has "1" to "9".

*** Nothing beyond this is tested yet. Mostly theory ***

4. Do the loop for win check. In the loop that assigns a counter point. Check the current player's turn using:
return counter % 2 === 0 ? player1Counter++;

or something like this since Im not good at writing that function out (yet):

if (counter % 2 ===0){
player1Counter#++
}
where # matches the winning combo's counter number.

4. Change the check counter code to end game. The loop for clicking each square would also check if the game is over. If true, don't let anyone click. Maybe even show a modal saying play again? Who knows

*/

// The winning combinations

var arr = [[1, 2, 3],
          [4,5,6]];

// Create a counter for each winning combo
var counter = 0;
var counter2 = 0;

// This is the player's clicked array
var check = [4,1,3,2];

//console.log(check.sort()); because I confused myself at one point

for (var i = 0; i <= check.length; i++) {
    // Sorting because fuck, why not?
    check.sort();

    // Check if the first array matches the value of a clicked square
    if (arr[0].indexOf(check[i]) > -1) {
      // adds a point to the winning combo's own point counter "counter"
        counter++;
        console.log("Added a point to counter 1");

    } else if (arr[1].indexOf(check[i]) > -1) {
      // adds a point to the counter2
        counter2++;
        console.log("Added a point to counter 2");

    } else {
      // guess it doesn't matter at this point. The loop added points to each combination's array
      console.log("Added a point to counter 3");
    }
}

// if any of the counters have 3 marks, then the player hit it 3 times.
if (counter === 3){
  console.log("found");
}


