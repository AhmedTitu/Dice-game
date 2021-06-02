const setWinningScore = document.querySelector('#setWinningScore')
const winningScoreDisplay = document.querySelector('#winningScore')
const p1scoreDisplay = document.querySelector('#p1scoreDisplay')
const p2scoreDisplay = document.querySelector('#p2scoreDisplay')
const diceNoDisplay = document.querySelector('#diceNoDisplay')
const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
const resetBtn = document.querySelector('#resetBtn')
const dice1 = document.querySelector('#dice-1')
const dice2 = document.querySelector('#dice-2')
const dice3 = document.querySelector('#dice-3')
const dice4 = document.querySelector('#dice-4')
const dice5 = document.querySelector('#dice-5')
const dice6 = document.querySelector('#dice-6')
const congratulationImg = document.querySelector('#congratulation')
  

dice1.style.display = 'none'
dice2.style.display = 'none'
dice3.style.display = 'none'
dice4.style.display = 'none'
dice5.style.display = 'none'
dice6.style.display = 'none'
congratulationImg.style.display = 'none'

let p1score = 0
let p2score = 0
let p1diceNo = 0
let p2diceNo = 0
let winningScore = 10

function disableBtn(playerBtn) {
    playerBtn.setAttribute('disabled', 'disabled')
}

function enableBtn(playerBtn) {
    playerBtn.removeAttribute('disabled')
}

function playerDiceImgDisplay(player){
   if(player === 1){
            dice1.style.display = 'block'
            dice2.style.display = 'none'
            dice3.style.display = 'none'
            dice4.style.display = 'none'
            dice5.style.display = 'none'
            dice6.style.display = 'none'
        }else if(player === 2){
            dice1.style.display = 'none'
            dice2.style.display = 'block'
            dice3.style.display = 'none'
            dice4.style.display = 'none'
            dice5.style.display = 'none'
            dice6.style.display = 'none'
        }else if(player === 3){
            dice1.style.display = 'none'
            dice2.style.display = 'none'
            dice3.style.display = 'block'
            dice4.style.display = 'none'
            dice5.style.display = 'none'
            dice6.style.display = 'none'
        }else if(player === 4){
            dice1.style.display = 'none'
            dice2.style.display = 'none'
            dice3.style.display = 'none'
            dice4.style.display = 'block'
            dice5.style.display = 'none'
            dice6.style.display = 'none'
        }else if(player === 5){
            dice1.style.display = 'none'
            dice2.style.display = 'none'
            dice3.style.display = 'none'
            dice4.style.display = 'none'
            dice5.style.display = 'block'
            dice6.style.display = 'none'
        }else{
            dice1.style.display = 'none'
            dice2.style.display = 'none'
            dice3.style.display = 'none'
            dice4.style.display = 'none'
            dice5.style.display = 'none'
            dice6.style.display = 'block'
        }
}

function player1Btn () {
    p1diceNo = Math.floor(Math.random() * 6) + 1
    playerDiceImgDisplay(p1diceNo)
    diceNoDisplay.textContent = p1diceNo
    p1score += p1diceNo
    p1scoreDisplay.textContent = p1score
    disableBtn(p1btn)
    enableBtn(p2btn)
    winner(p1score , winningScore )

    
}

function player2Btn () {
    p2diceNo = Math.floor(Math.random() * 6) + 1
    playerDiceImgDisplay(p2diceNo)
    diceNoDisplay.textContent = p2diceNo
    p2score += p2diceNo
    p2scoreDisplay.textContent = p2score
    disableBtn(p2btn)
    enableBtn(p1btn)
    winner(p2score , winningScore )

}

function resetButton () {
    p1score = 0
    p2score = 0
    p1diceNo = 0
    p2diceNo = 0
    winningScore = 10
    winningScoreDisplay.textContent = 10
    diceNoDisplay.textContent = 0
    p1scoreDisplay.textContent = 0
    p2scoreDisplay.textContent = 0
    setWinningScore.value = "Set the winning score"
    p1btn.removeAttribute('disabled')
    p2btn.removeAttribute('disabled')
    dice1.style.display = 'none'
    dice2.style.display = 'none'
    dice3.style.display = 'none'
    dice4.style.display = 'none'
    dice5.style.display = 'none'
    dice6.style.display = 'none'
    congratulationImg.style.display = 'none'
}

function setWinningScoreFunc (event) {
    winningScore = Number(event.target.value)
    winningScoreDisplay.textContent = Number(event.target.value)  
}

function winner(playerScore , winningScore){
    if (winningScore <= playerScore){
        p1btn.setAttribute('disabled', 'disabled')
        p2btn.setAttribute('disabled', 'disabled')
        congratulationImg.style.display = 'block'
        dice1.style.display = 'none'
        dice2.style.display = 'none'
        dice3.style.display = 'none'
        dice4.style.display = 'none'
        dice5.style.display = 'none'
        dice6.style.display = 'none'
    }
    // resetButton()
}

p1btn.addEventListener('click' , player1Btn)

p2btn.addEventListener('click', player2Btn)

resetBtn.addEventListener('click' , resetButton)

setWinningScore.addEventListener('change', setWinningScoreFunc)
