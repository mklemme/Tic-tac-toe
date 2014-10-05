// Win combos


winCombos = [
  [0,1,2],
  [3,4,5]
];

var players = [player1, player2];

var player1 = {
  "name" : "Jan doe",
  "marker" : "X",
  "clicked" : [],
};

var player2 = {
  "name" : "John doe",
  "marker" : "O",
  "clicked" : [],
};


for (var i = 0; i < main.length; i++) {
  for (var j = 0; j < main[i].length; j++) {
    console.log(main[j]);
    if (compare.indexOf(main[i][j])){
        //compare has a number from the current array! main[i][j] exists in compare!
    }
  }
}

var main =  [[1,2,3],
            [4,5,6]];
var compare = [1,2,4,5,6];



var counter = 0;
var x = [[0,1,2], [1,4,3]]
var player1 = [0,1,4,3]

for(var i=0; i <= player1.length; i++){
  for(var j=0; j <= x.length; j++){
//     for(var y=0; y <= x.length[j]; y++){

  if(player1[i] === x[y]){
    counter++
  }
    }
  }
}
if (counter ===3){
    console.log("Winner")
  }