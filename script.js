var roll = document.querySelector('.roll')
var hold = document.querySelector('.hold')
var start_new = document.querySelector('.new')
var player0 = document.querySelector('.player--0')
var player1 = document.querySelector('.player--1')
var dice = document.querySelector('.dice')
var pic = ['','dice-1','dice-2','dice-3','dice-4','dice-5','dice-6']
var ran = Math.trunc(Math.random()*5)+1
var score0 = document.querySelector('.score--0')
var score1 = document.querySelector('.score--1')
var curscore0 = document.querySelector('.current--0')
var curscore1 = document.querySelector('.current--1')
var win0 = document.querySelector('.win--0')
var win1 = document.querySelector('.win--1')


let activePlayer, curscore,  playing, score


var init = function(){
    score=[0,0]
    curscore = 0
    activePlayer = 0
    playing = true

    curscore0.textContent=0
    curscore1.textContent = 0
    score0.textContent=0
    score1.textContent=0
  

    win0.classList.add('hidden')
    win1.classList.add('hidden')
    dice.classList.add('hidden')
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init()

const switchPlayer = function () {
    document.querySelector(`.current--${activePlayer}`).textContent = 0;
    curscore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }

roll.addEventListener('click', function(){
    if(playing){
    ran = Math.trunc(Math.random()*6)+1
    dice.innerHTML = `<img src='${pic[ran]}.png' width="150">`
    dice.classList.remove('hidden')
    if(ran!=1){
    curscore += ran
    document.querySelector(`.current--${activePlayer}`).textContent = curscore
   
    }
    else{
        switchPlayer()
    }
    }
})

hold.addEventListener('click', function(){
    if(playing){
        score[activePlayer] += curscore
        document.querySelector(`.score--${activePlayer}`).textContent = score[activePlayer]
        
    
    if(score[activePlayer] >= 100){
        playing = false
        dice.classList.add('hidden')
        document.querySelector(`.win--${activePlayer}`).classList.remove('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');   
    }    
    else{
        switchPlayer()
    }

    }
})

start_new.addEventListener('click', init)
//{
    // score.textContent = 0
    // console.log(score.textContent)
    // curscore.textContent = 0
    // console.log(curscore.textContent)
    // player0.style.boxShadow = 'none'
//})

