//make turnCounter into variable
let turnCounter = 0

//hide game board until startButton is clicked
document.querySelector(".board").classList.add("hidden")

//addEventListener to startButton
document.querySelector("#startButton").addEventListener('click', startGame)

//after startButton is clicked, increase turnCounter, update current player turn with turnCounter, hide startButton, reveal game board
function startGame(){
  turnCounter++
  checkTurn()
  document.querySelector("#startButton").classList.add("hidden")
  document.querySelector(".board").classList.remove("hidden")
}

// update the current player's turn
function checkTurn(){
  if (turnCounter % 2 === 0){
    document.querySelector("#playerTurn").innerText = "X's turn"
  } else {
    document.querySelector("#playerTurn").innerText = "O's turn"
  }
}

// constructor to addEventListener to squares, make function to addValue to square when clicked, update winPattern array with values added with click, check if any winPattern arrays are true, increase turnCounter, update current player turn with turnCounter, or alert if space is already filled.
class makeSquare{
  constructor (position, squareNum){
    this.position = position
    this.squareNum = squareNum
    position.addEventListener('click', addValue =>{
      if(this.position.innerText === ""){
        turnCounter % 2 === 0 ? this.position.innerText = "X" : this.position.innerText = "O";
        updateArray()
        checkWin()
        turnCounter++
        checkTurn()
      } else{
        alert("space is taken already")
      }
    })
  }
}

//actual constructing of clickable squares
let square1 = new makeSquare(document.querySelector(".square1"), '.square1')
let square2 = new makeSquare(document.querySelector(".square2"), '.square2')
let square3 = new makeSquare(document.querySelector(".square3"), '.square3')
let square4 = new makeSquare(document.querySelector(".square4"), '.square4')
let square5 = new makeSquare(document.querySelector(".square5"), '.square5')
let square6 = new makeSquare(document.querySelector(".square6"), '.square6')
let square7 = new makeSquare(document.querySelector(".square7"), '.square7')
let square8 = new makeSquare(document.querySelector(".square8"), '.square8')
let square9 = new makeSquare(document.querySelector(".square9"), '.square9')


// // constructor to make winPattern arrays
// class winPattern{
//  constructor (s1, s2, s3){
//    this.s1 = s1
//    this.s2 = s2
//    this.s3 = s3

//    this.winArray = [this.s1, this.s2, this.s3]
//  }
// }

//declaring winPattern arrays as variables
let row1 = [square1.position.innerText, square2.position.innerText, square3.position.innerText]
let row2 = [square4.position.innerText, square5.position.innerText, square6.position.innerText]
let row3 = [square7.position.innerText, square8.position.innerText, square9.position.innerText]
let col1 = [square1.position.innerText, square4.position.innerText, square7.position.innerText]
let col2 = [square2.position.innerText, square5.position.innerText, square8.position.innerText]
let col3 = [square3.position.innerText, square6.position.innerText, square9.position.innerText]
let diag1 = [square1.position.innerText, square5.position.innerText, square9.position.innerText]
let diag2 = [square7.position.innerText, square5.position.innerText, square3.position.innerText]

let fullGrid = [square1.position.innerText, square2.position.innerText, square3.position.innerText, square4.position.innerText, square5.position.innerText, square6.position.innerText, square7.position.innerText, square8.position.innerText, square9.position.innerText]

//function to update WinPattern arrays with correct values after clicking square
function updateArray(){
  row1 = [square1.position.innerText, square2.position.innerText, square3.position.innerText]
  row2 = [square4.position.innerText, square5.position.innerText, square6.position.innerText]
  row3 = [square7.position.innerText, square8.position.innerText, square9.position.innerText]
  col1 = [square1.position.innerText, square4.position.innerText, square7.position.innerText]
  col2 = [square2.position.innerText, square5.position.innerText, square8.position.innerText]
  col3 = [square3.position.innerText, square6.position.innerText, square9.position.innerText]
  diag1 = [square1.position.innerText, square5.position.innerText, square9.position.innerText]
  diag2 = [square7.position.innerText, square5.position.innerText, square3.position.innerText]

  fullGrid = [square1.position.innerText, square2.position.innerText, square3.position.innerText, square4.position.innerText, square5.position.innerText, square6.position.innerText, square7.position.innerText, square8.position.innerText, square9.position.innerText]
}

//check if any winPattern arrays are all Xs or Os, reveal playAgain button
function checkWin(){
  function isX(element){
    return element === "X"
  }
  function isO(element) {
    return element === "O"
  }
  if(row1.every(isX) || row2.every(isX) || row3.every(isX) || col1.every(isX) || col2.every(isX) || col3.every(isX) || diag1.every(isX) || diag2.every(isX))
  {
    document.querySelector("#resultsText").innerText = "X wins!"
    playAgainPrompt()
  }
  else if(row1.every(isO) || row2.every(isO) || row3.every(isO) || col1.every(isO) || col2.every(isO) || col3.every(isO) || diag1.every(isO) || diag2.every(isO))
  {
    document.querySelector("#resultsText").innerText = "O wins!"
    playAgainPrompt()
  } else {
    checkScratch()
  }
}

//updated checkScratch function
function checkScratch(){
  if(fullGrid.every(function isFull(element){
    return element != ""
  })){
    document.querySelector("#resultsText").innerText = "SCRATCH"
    playAgainPrompt()
  }
}

//add resetButton eventListener & function
document.querySelector("#playAgain").addEventListener("click", resetGame)

function resetGame(){
  document.location.reload()
}

//condensed some repeated code from above with function
function playAgainPrompt(){
  document.querySelector("#playAgain").classList.remove("hidden")
  document.querySelector(".board").style.pointerEvents = "none"
}

//THINGS TO ADD
//make game start with random turn order

//line through winning array