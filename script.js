'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.guess').value=27;
let secretNumber=Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore=0;
const displayMessage=function(message)
{
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    // console.log(guess);
    //console.log(score);
    if(!guess)
    {
        displayMessage('⛔ No Number Selected ');
    }
    else if(guess === secretNumber && score > 0)
    {
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent=secretNumber;
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
          document.querySelector('body').style.backgroundColor = '#60b347';
        }
    }
    else if(guess !== secretNumber)
    {
        if(score>1)
        {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            displayMessage('You have exceeded the number of guesses 💥');
            score=0;
            document.querySelector('.score').textContent = score;
        }
    }
    });
    document.querySelector('.again').addEventListener('click',function()
    {
        displayMessage('Start guessing...');
        score=20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent= '?';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.guess').value='';
    })