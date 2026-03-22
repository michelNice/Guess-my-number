
'use strict'
let highscore = 0
let score = 20
let randomNumber = Math.trunc(Math.random() * 20) + 1
const btn__again = document.querySelector('.btn-again')
const btn__check = document.querySelector('.btn-check')
const bodys = document.querySelector('body')
const messagems  = document.querySelector('.messagem')
const scores =  document.querySelector('.score')
const highscores =  document.querySelector('.highscore')
const guessNumbers = document.querySelector('.number')
const inputColors = document.querySelector('#input')




const messagem = msg=> messagems.innerText = msg

const inputNumber = guessNumber => guessNumbers.innerText = guessNumber

const scoreFunction = points => scores.innerText = points

const color = colorBody => bodys.style.background = colorBody

const inputColor = input => inputColors.style.background = input

const high = scorePoints => highscores.innerText = scorePoints

const checkNumber = ()=>{
   let input = Number(document.querySelector('#input').value)



   randomNumber = Math.trunc(Math.random() * 20) + 1

   if(!input){
        messagem('⛔ No number')
   }else if(input === randomNumber){
        inputNumber(randomNumber)
         messagem('🎉 Correct number!')
         color('#60b347')
         inputColor('#60b347')

         input = ''
         if(score > highscore){
            highscore = highscore + score 
            high(highscore)
        }
   }else if(input !== randomNumber){
        if(score > 0){
            score--
            scoreFunction(score)
            messagem(input > randomNumber ? '📈 Too high!':'📉 Too low!')
        }else{
            messagem('💥 You lost the game!')
        }
   }

}

const resetAgain = ()=>{
    score = 20

    highscore = 0

    inputColor('#000')

    color('#000')

    scoreFunction( score)

    high(highscore)

    messagem('Start guessing...')

    inputNumber('?')
}


btn__again.addEventListener('click',resetAgain)
btn__check.addEventListener('click',checkNumber)













