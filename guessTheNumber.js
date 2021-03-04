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