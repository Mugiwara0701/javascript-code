let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a valid number greater than 0')
    }else if(guess > 100){
        alert('Please enter a valid number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guess right')
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game`
    startOver.appendChild(p)
    playGame = false
    newGame()
}