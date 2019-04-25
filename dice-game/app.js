var scores, roundScore, activePlayer, gamePlaying;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random()*6+1);
        var dice2 = Math.floor(Math.random()*6+1);

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        if (dice1 === 6 && dice2 === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            roundScore = 0;
            nextPlayer();
        } else if (dice1 === 1 && dice2 === 1) {
            nextPlayer();
            roundScore = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
        } else {
            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        if (input) {
            winningScore = input;
        }
        else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
        else {
            nextPlayer();        
        }   
    }    
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', function() {
    init();    
});

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

(function rules() {
    var rulesBtn = document.querySelector('.game-rules input');
    var rulesBlock = document.querySelector('.game-rules');

    function showBlock() {
        rulesBlock.style.display = 'block';
        setTimeout(function() {rulesBlock.classList.remove('hide')});
    }
    function hideBlock(){
        rulesBlock.classList.add('hide');
        setTimeout(function() {rulesBlock.style.display = 'none'}, 500);
    }

    showBlock();

    function toggleBlock() {
        if (rulesBlock.classList.contains('hide')) {
            showBlock();
        }
        else {
            hideBlock();
        }
    } 

    rulesBtn.addEventListener('click', toggleBlock);
})();