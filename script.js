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
      tile.innerText = " ";
      document.getElementById("board").appendChild(tile);
    }
  }

  //listen for user input
  //key press
  document.addEventListener("keyup", (e) => {
    if (gameOver) return;
    //allow only a-z backspace and enter
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
      if (col < width) {
        let currTile = document.getElementById(
          row.toString() + "-" + col.toString()
        );
        if (currTile.innerText == "") {
          currTile.innerText = e.code[3];
          col += 1;
        }
      }
    } //if user wants to backspace
    else if (e.code == "Backspace") {
      if (0 < col && col <= width) {
        col -= 1;
      }
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      currTile.innerText = "";
    } else if (e.code == "Enter") {
      update();
      row += 1; //starts new row
      col = 0; //start at 0 for new row
    }
    if (!gameOver && row == height) {
      gameOver = true;
      document.getElementById("answer").innerText = word;
    }
  });
}

function update() {
  let correct = 0;
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    //is it in the correct position
    if (word[c] == letter) {
      currTile.classList.add("correct");
      correct += 1;
    } //is it in the word
    else if (word.includes(letter)) {
      currTile.classList.add("present");
    }
    //not in the word
    else {
      currTile.classList.add("absent");
    }

    if (correct == width) {
      gameOver = true;
    }
  }
}
