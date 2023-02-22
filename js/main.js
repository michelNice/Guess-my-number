'use strict'
//let randomNumber = Math.trunc(Math.random() * 20) + 1
let score  = 20
const messagem = function(msg){
    document.querySelector('.messagem').textContent = msg
}
const inputNumber = function(guessNumber){
    document.querySelector('.number').textContent = guessNumber
}
const  scoreFunction = function(points){
    document.querySelector('.score').textContent = points
}

const color = function(colorBody){
    document.querySelector('body').style.background = colorBody
}

document.querySelector('.btn-check').addEventListener('click',function(){
    const input = Number(document.querySelector('#input').value)
    const randomNumber = Math.trunc(Math.random() * 20) + 1
    
    if(!input){
        messagem('⛔ No number')
    }else if(input === randomNumber){
        inputNumber(randomNumber)
        messagem('🎉 Correct number!')
        color('#60b347')
    }else if(input > randomNumber){
        if(score > 1){
            messagem('📈 Too high')
            scoreFunction(score)
            score--
        }else{
            messagem('💥 You lost the game!')
        }
        
    }else if(input < randomNumber){
        messagem('📈 Too high')
        scoreFunction(score)
        score--
    }
})
//Reset
document.querySelector('.btn-again').addEventListener('click',function(){
    messagem('Start guessing...')

    scoreFunction(score)
 
    inputNumber('?')

    color('#000')
})




