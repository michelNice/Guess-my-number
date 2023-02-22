function messagem(msg){
    document.querySelector('.messagem').textContent = msg
}
function inputNumber(guessNumber){
    document.querySelector('.number').textContent = guessNumber
}
function scoreFunction(points){
    document.querySelector('.score').textContent = points
}

function color(colorBody){
    document.querySelector('body').style.background = colorBody
}
let score  = 20
'use strict'
document.querySelector('.btn-check').addEventListener('click',function(){

    const input = Number(document.querySelector('#input').value)
    const randomNumber = Math.trunc(Math.random() * 20) + 1
    
    if(!input){
        messagem('⛔ No number')
    }else if(randomNumber == input){
        inputNumber(randomNumber)
        messagem('🎉 Correct number!')
        color('#60b347')
    }else if(input > randomNumber){
        if(score > 0){
            messagem('📉 Too high')
            scoreFunction(score)
            score--
        }else if(score < 0){
            messagem('💥 You lost the game')
        }
        
    }else if(input < randomNumber){
        messagem('📈 Too low')
        score--
        scoreFunction(score)
    }
    
})
//Reset
document.querySelector('.btn-again').addEventListener('click',function(){
    messagem('Start guessing...')

    document.querySelector('.score').textContent = 20

    scoreFunction(20)

    inputNumber('?')

    color('#000')
})




