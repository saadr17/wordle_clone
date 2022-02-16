let height = 6; // number of guesses
let width = 5; // length of the word

let row = 0; //current guess (attempt #)
let col = 0; //current letter for that attempt

let gameOver = false;
let word = "SQUID";

window.onload = function () {
  initialize();
};

function initialize() {
  //create the game board
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      //creating a span and inserting id and class to that
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "P";
      document.getElementById("board").appendChild(tile);
    }
  }
}
