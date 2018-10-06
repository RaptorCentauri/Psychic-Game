// This is a game in which the computer randomly picks a letter and the player has to guess what that letter is. The player will have 10 guesses per each round.
// If they guess correctly their Win score will increase by 1. If they do not guess correctly within 10 tries, their lose score will increase by one. The letters on each guess
// will be printed to the screen.

// ---------- Psuedo Code ------------

	// The computer writes to the screen "Wins: 0" "Losses: 0" "Guesses Left: 10" "Letters Guessed:"
	// The computer randomly generates a letter between A and Z
	// The user will hit a letter on the keyboard. If the letter matches the generated one, then "Wins" will go up by 1. If it does not then that letter will be printed to
	// "Letters Guessed".
	// If "Letters Guessed" becomes 10, then "Losses" will go up by 1
	// Any wrong guess will be added to an array wrongLetter, and that will be displayed.
// ---------------------------------------------------------------


var wins = 0;

for (var i = 0; i < 5; i++) {
	wins+=3;
}

var losses = 0;

var guessesRemaining = 5;

var wrongLetter = [];

var randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

console.log("Random Letter: " + randomLetter);

// var guessLetter;

document.onkeyup = function(event){
	psychic(event.key);
}

function psychic(guessLetter){

	console.log("letter guessed: " + guessLetter);


	// This compares randomLetter to guessLetter
	if (guessLetter === randomLetter){
		wins++;
		document.getElementById("userWins").innerHTML=wins;
		newGame();


		// document.write("You win! The letter was " + randomLetter);
	}

	else{
		//increase the loses count
		losses++;
		document.getElementById("userLosses").innerHTML=losses;

		//appened the incorrect guess to the letters guessed list
		wrongLetter.push(guessLetter);
		document.getElementById("lettersGuessed").innerHTML=wrongLetter.join(', ');

		//Guesses left goes down
		guessesRemaining--;
		document.getElementById("guessesLeft").innerHTML=(guessesRemaining);

		//Game over when all guesses are gone.
		if(guessesRemaining==0){
			alert("GAME OVER!");
		}

	}

}

// Create a new game function
function newGame(){
	randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	console.log("new Random letter: " + randomLetter);
	// psychic(event.key);
}
