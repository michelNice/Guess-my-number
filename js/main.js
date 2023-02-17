'use strict'

console.log(document.querySelector('.messagem').textContent = '🎉 Correct number!')


document.querySelector('.score').textContent = 25


document.querySelector('.btn-check').addEventListener('click',function(){
    const input = document.querySelector('#input').value


    console.log(input)


    document.querySelector('.number').textContent = input
})




