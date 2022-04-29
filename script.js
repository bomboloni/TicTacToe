clasqua//Constructor for Players
//HTMl 9 boxes within wrapper
//get images of x and o
//create event listener for each block in the HTML
//
document.querySelector('#boxOne').addEventListener('click', boxOne.addXorO)
document.querySelector('#boxTwo').addEventListener('click', boxTwo.addXorO)
document.querySelector('#boxThree').addEventListener('click', boxThree.addXorO)
document.querySelector('#boxFour').addEventListener('click', boxFour.addXorO)
document.querySelector('#boxFive').addEventListener('click', boxFive.addXorO)
document.querySelector('#boxSix').addEventListener('click', boxSix.addXorO)
document.querySelector('#boxSeven').addEventListener('click', boxSeven.addXorO)
document.querySelector('#boxEight').addEventListener('click', boxEight.addXorO)
document.querySelector('#boxNine').addEventListener('click', boxNine.addXorO)

document.querySelector('.square').style.background = `url(`${xOrO}`)`

document.querySelector('.startButton').addEventListener('click', clearBoard)

let numberOfTurns = 0;
class Win{
  constructor(classCheck){
    this.classCheck = classCheck
  }
  checkX(arr){
    arr.every(e=> {
      e.classList.includes('hasX')
    })
  }
  checkO(arr){
    arr.every(e=> {
      e.classList.includes('hasX')
    })
  }
  checkWin(){
    let arr = Array.from(document.classList(this.classCheck))
    if(checkX(arr)){
      document.getElementById('winning').innerText = "X wins"
    }else if(checkO(arr)){
      document.getElementById('winning').innerText = "O wins"
    } 
  }
}
class Box{
  constructor(boxLocation, squareLocation){
    this.boxLocation = boxLocation
    this.squareLocation = squareLocation
  }
  checkEmpty(){
    return squareLocation.classList.includes('isEmpty')
  }
  addXorO(){
    numberOfTurns++
    if(checkEmpty()){
      this.squareLocation.classList.remove('isEmpty')
       if(numberOfTurns % 2 == 0){
          this.squareLocation.classList.add('hasX')
          this.squareLocation.innerText = "X"
          
          
      }else{
          this.squareLocation.classList.add('hasO')
          this.squareLocation.innerText = "O"
          
      }
    }
   
  }
  
}
const boxOne = new Box(document.getElementById('boxOne'),document.getElementById('square1'))
const boxTwo = new Box(document.getElementById('boxTwo'),document.getElementById('square2'))
const boxThree = new Box(document.getElementById('boxThree'),document.getElementById('square3'))
const boxFour = new Box(document.getElementById('boxFour'),document.getElementById('square4'))
const boxFive = new Box(document.getElementById('boxFive'),document.getElementById('square5'))
const boxSix = new Box(document.getElementById('boxSix'),document.getElementById('square6'))
const boxSeven = new Box(document.getElementById('boxSeven'),document.getElementById('square7'))
const boxEight = new Box(document.getElementById('boxEight'),document.getElementById('square8'))
const boxNine = new Box(document.getElementById('boxNine'),document.getElementById('square9'))
