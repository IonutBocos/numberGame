const numberHint = document.getElementById('message1');
const numberOfGuesses = document.getElementById('message2');
let guessed = document.getElementById('message3');

const answer = Math.floor(Math.random() * 100) + 1;

let noOfGuesses = 0;
let guessedNums = [];

function play() {
  let userGuess = document.getElementById('guess').value;

  if (userGuess < 1 || userGuess > 100) {
    alert('Plese insert a number between 1 and 100.');
  } else {
    guessedNums.push(userGuess);
    noOfGuesses += 1;

    if (userGuess < answer) {
      numberHint.innerText = 'Your guess is too low.';
      numberOfGuesses.innerText = `No. of guesses: ${noOfGuesses}`;
      guessed.innerText = `Guessed numbers are: ${guessedNums}`;
    } else if (userGuess > answer) {
      numberHint.innerText = 'Your guess is too hight.';
      numberOfGuesses.innerText = `No. of guesses: ${noOfGuesses}`;
      guessed.innerText = `Guessed numbers are:  ${guessedNums}`;
    } else if (userGuess == answer) {
      numberHint.innerText = `You win!!`;
      numberOfGuesses.innerText = `The number was ${answer}`;
      guessed.innerText = `You guess it in ${noOfGuesses} guesses.`;
      document.getElementById('my_btn').disabled = true;
    }
  }
}
