'use strict';
let high = Number(document.querySelector('.highscore1').textContent);
/*creating random num ber*/
let secretnum = Math.trunc(Math.random()*20)+1;
/*creating score*/
let score=20;
/*implenting logic on click button*/
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess)
  if(score>0){
    if(!guess){
      document.querySelector('.message').textContent = 'no number!';

    }
    else if(guess<secretnum){
      document.querySelector('.message').textContent = 'too low number!';
      score--;
      document.querySelector('.score1').textContent= score;
    }
    else if(guess>secretnum){
      document.querySelector('.message').textContent = 'too high number!';
      score--;
      document.querySelector('.score1').textContent= score;
    }
    else if(guess===secretnum){
      document.querySelector('.message').textContent = 'congratulations you won!';
      document.querySelector('body').style.backgroundColor = 'DeepPink';
      document.querySelector('.last').style.backgroundColor = 'black';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretnum;
      if(high<score){
        document.querySelector('.highscore1').textContent = score;
      }
    }
  }else{
    document.querySelector('body').style.backgroundColor = '#8B0000';
    document.querySelector('.last').style.backgroundColor = 'black';
    document.querySelector('.message').textContent = 'Sorry! you lost the game ';
  }
});

document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secretnum = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.score1').textContent= score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgba(92, 23, 124, 0.274)';
  document.querySelector('.last').style.backgroundColor = 'rgb(71, 20, 71)';
  document.querySelector('.number').style.width = '15rem';
  high = Number(document.querySelector('.highscore1').textContent);
})
