
const levelDict = {
    'level1': {
        'range':[1,10],
        'name': 'Easy'
    },
    'level2':{
        'range':[1,50],
        'name': 'Basic'
    },
    'level3': {
        'range':[1,100],
        'name': 'Master'
    },
}
const dom = {
    gamePlayground : document.querySelector('.game-playground'),
    guessHistory : document.querySelector('guess-history'),
    levelStatus : document.querySelector('.level-status'),
    gameEndArea : document.querySelector('.game-end-area'),
    playerNumberInput : document.querySelector('.user-input-area input[type="number"]'),
    btnStartPlay:document.querySelector('.btn-start-play'),
    selectLevelInput:document.querySelector('select [name ="selectLeve"] ')
}



const gameState = {
    'machineNumber':undefined,
    'playerNumber': undefined,
    'minRange': undefined,
    'maxRange': undefined,

}
dom.userNumberInput.value('');
dom.userNumberInput.focus();

function startPlay(e){
    const selectedLavel = dom.selectLevelInput.value;
    console.log(`selectedLevel:${selectedLavel}`);
    gameState.minRange = levelDict[selectedLavel][0];
    gameState.maxRange = levelDict[selectedLavel][1];
    // maxTries = log(base2)(maxRange-minRange)
     gameState.mzxTries =Math.ceil(Math.log2(gameState.maxRange-gameState.minRange));

    const msg = `You are playing ${levelDict[selectedLavel].name}`;
}
function resetGame(){
    dom.gamePlayground.classList.add('hidden');
    dom.guessHistory.classList.add('hidden');
    dom.levelStatus.classList.add('hidden')
    dom.gameEndArea.classList.add('hidden');
}
window.onload = (event) =>{
    resetGame();
    
}
dom.btnStartPlay.addEventListener('click',startPlay);


function generateRandomNumber(start, end){
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end - start+ 1) + start);
  
  }
let rangesNumber = document.getElementById('ranges');
let selectedRange = rangesNumber.value;
if (selectedRange === 'level1'){
    generateRandomNumber(1, 10);
    
}

document.getElementById('submitGuess').onclick = function(){
    let userNumber = document.getElementById('guessField').value;
    if (randomNumber === userNumber){
        alert('Congratulations')
    }
    else {
        alert("Sorry, try again")
    }
}