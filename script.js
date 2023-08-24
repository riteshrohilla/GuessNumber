'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!'

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 42;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    document.querySelector('.message').textContent = 'Correct number!'

});