//Constructor for Players
//HTMl 9 boxes within wrapper
//get images of x and o
//create event listener for each block in the HTML
//
document.querySelector('#boxOne').addEventListener('click', addXorO)
document.querySelector('#boxTwo').addEventListener('click', addXorO)
document.querySelector('#boxThree').addEventListener('click', addXorO)
document.querySelector('#boxFour').addEventListener('click', addXorO)
document.querySelector('#boxFive').addEventListener('click', addXorO)
document.querySelector('#boxSix').addEventListener('click', addXorO)
document.querySelector('#boxSeven').addEventListener('click', addXorO)
document.querySelector('#boxEight').addEventListener('click', addXorO)
document.querySelector('#boxNine').addEventListener('click', addXorO)

document.querySelector('.square').style.background = `url(`${xOrO}`)`

document.querySelector('startButton').addEventListener('click', clearBoard)
class TikTakToe {
  constructor() {
    this.boxOne = 
    this.boxTwo = 
    this.boxThree = 
  }
}
let numberOfTurns = 0;

class Box{
  constructor(boxLocation){
    this.boxLocation = location
  }
  addXorO(){
    if(numberOfTurns % 2 == 0){
      return this.boxLocation.innerText = "X"
    }else{
      return this.boxLocation.innerText = "O"
    }
  }
}
