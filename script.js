'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!'

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 42;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;