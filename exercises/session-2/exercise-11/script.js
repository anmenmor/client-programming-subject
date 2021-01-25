// Initial variables - don't touch this code
const boardWidth = 30;
const boardHeigth = 16;
const ballSymbol = " o";
const userSymbol = " =";
let endFlag;
let u; // User y position
let x; // Ball position x
let y; // Ball position y
let xD; // Ball x Directon 
let yD; // Ball y Direction
let score; // User score

// Initialize vars and print the empty board - don't touch this code
const printBoard = () => {
  u = 16
  score = 0;
  x = y = xD = yD = 1;
  endFlag = false;
  
  const gameField = document.getElementById('gameField');
  while (gameField.firstChild) {
    gameField.removeChild(gameField.firstChild);
  }

  for (let i=0; i<=boardHeigth; i++) {
    for (let j=0; j<=boardWidth; j++) {
      const input = document.createElement('input');
      input.id = `${i}-${j}`;
      input.classList.add('board');
      gameField.insertAdjacentElement('beforeend', input);
    }
    const br = document.createElement('br');
    gameField.insertAdjacentElement('beforeend', br);
  }
};

// Print inside the input - don't touch this code
const printValueInput = (i, j, val) => {
  const input = document.getElementById(`${i}-${j}`);
  if (input) input.value = val;
};

// Print all the content of the board
/*
Create the DISPLAY function hear.
*/
function display() {
  for (let i=0; i<=boardHeigth; i++) {
    for (let j=0; j<=boardWidth; j++) {
      if(i === x && j === y){
      printValueInput(i,j,ballSymbol);
      }else if(i === boardHeigth && j === u){
        printValueInput(i,j,userSymbol);
      }else{
        printValueInput(i,j,'');
      }
    }
  }

}

// Moves and checks collisions
/*
Create the MOVE function hear.
*/

function move() {
  if(xD == 1){
    x = x + 1;
  }else {
    x = x - 1;
  }

  if(yD == 1){
    y = y + 1;
  }else {
    y = y - 1;
  }

  if(x === boardHeigth && y === u){
    xD = -1;
    score++;
  } else if(x === boardHeigth + 1 && y !== u + xD){
    endFlag = true;
  }

  if(x === 0){
    xD = 1;
  }

  if(y === 0){
    yD = 1;
  }

  if(y === boardWidth){
    yD = -1;
  }
}

// Arrows keys event - don't touch this code
document.addEventListener('keydown', e => {
  if (!endFlag) {
    if (e.key === 'ArrowRight') u += 1;
    else if (e.key === 'ArrowLeft') u -= 1;
    display();
  }
});

// Promise to create a timer - don't touch this code
function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
 }

// Start the game - don't touch this code
async function start() {
  document.getElementById('start').disabled=true;
  printBoard();
  const scoreInput = document.getElementById('score');
  while (!endFlag) {
    display();
    move();
    scoreInput.value = " " + score;
    await timer(200);
  }
  alert('You lose!');
  document.getElementById('start').disabled=false;
}