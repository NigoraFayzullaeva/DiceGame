var scores, roundScores, activeplayer, dice, gamePlaying;

init();
function init(){
    scores = [0, 0];
    roundScores = 0;
    activeplayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        /* рандомное число для кубика */
        dice = Math.floor(Math.random()*6+1);
        /* передача числа в картинку и вывод картинки */
        var diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block';
        diceDom.src = `dice-${dice}.png`;
        /* набор очков за бросок */
        if(dice !== 1){
            roundScores += dice;
            document.querySelector(`#current-${activeplayer}`).textContent = roundScores;
        }else{
            nextPlayer();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activeplayer] += roundScores;
        document.querySelector(`#score-${activeplayer}`).textContent = scores[activeplayer];

        if(scores[activeplayer] >= 20){
            document.querySelector(`#name-${activeplayer}`).textContent = 'Winner !';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
})
function nextPlayer(){
    if(activeplayer === 0){
        activeplayer = 1;
    }else{
        activeplayer = 0;
    }
    roundScores = 0;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
