var start = function(){
  console.log("Window done loading page");
  styleListElements();

  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};
var counter = 0;

var styleListElements = function(){
  var list_items = document.querySelectorAll(".squares");
    for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].addEventListener("click", selectItem);
  }
};

var selectItem = function( event ){
  console.log("Clicked item:" + this.innerHTML + ". Event:" + event);
    if(this.classList.contains("selected")){
      console.log("Stop");
    }
   else{
    if (counter % 2 ===0){
      this.classList.add("selected", "player1");
      counter ++;
    }
    else{
      this.classList.add("selected", "player2");
      counter ++;
    }
   }
};



var resetButtonHandler = function() {
  var list_items = document.querySelectorAll(".squares");
    for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].classList.remove("selected" , "player1", "player2");
  }



  console.log("reset");
};


