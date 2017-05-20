document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

// Variables
	// Letters to guess
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

	// Word bank
	var wordsToGuess = ["rocketeer", "kingsquest", "legendofzelda", "baldursgate"];

	// Sets win variable to 0 at start
	var wins = 0;

	// Current Word to guess
	var answerArray = [];

	// number of guesses remaining
	var guesses = 10;

	// Letter already guessed
	var guessedLetters = [];

	// User Guess
	var userGuess = event.key;

	// Setting up random word to guess
	var currentWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

	// Creating blank spaces for the word to guess 
	for (var i = 0; i < currentWord.length; i++) {
		answerArray[i] = "_"; 
	}

	// Injecting the current word to guess into the div
	document.querySelector("#currentWord").innerHTML = answerArray;

	var remainingLetters = currentWord.length;

	// Showing Remaining Guesses
	remainingGuesses.innerHTML = guesses;

		document.onkeyup = function(event) {
		// inside key up
		console.log("Inside Key Up!");
		console.log("Issue with while block");
		console.log("Letters remaining " + remainingLetters);
			

		userGuess = event.key;
			// Use if instead of while
			if (remainingLetters > 0) {
				for (var k = 0; k < alphabet.length; k++) {
					if (alphabet[k] === userGuess) {
						console.log ("What user guesses " + userGuess);
					for (var j = 0; j < currentWord.length; j++) {
					if (currentWord[j] === userGuess) {
						answerArray[j] = userGuess;
						remainingLetters--;
					}
				}

			}


					// Updating the HTML
					document.querySelector("#currentWord").innerHTML = answerArray;
				}
			}

		}
});