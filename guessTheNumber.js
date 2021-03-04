let randomNumber = Math.floor(Math.random() * (start - end + 1) + end);
let rangesNumber = document.getElementById('ranges');
let selectedRange = rangesNumber.value;

document.getElementById('submitGuess').onclick = function(){
    let userNumber = document.getElementById('guessField').value;
    if (randomNumber === userNumber){
        alert('Congratulations')
    }
    else {
        alert("Sorry, try again")
    }
}