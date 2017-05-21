document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

// Variables

	// Music Variables
	// Gets Link for Theme Song
      var rocketeer = new Audio("assets/music/rocketeer.mp3");

      var baldursGate = new Audio("assets/music/BaldursGate.mp3");

      var kq6 = new Audio("assets/music/KQ6.mp3");

      var legendofZelda = new Audio("assets/music/LegendofZelda.mp3");

	// Word bank
	var wordsToGuess = ["rocketeer", "kingsquest", "legendofzelda", "baldursgate"];

	// Sets win variable to 0 at start
	var wins = 0;

	// Current Word to guess
	var answerArray = [];

	// number of guesses remaining
	var guesses = 10;

	// User Guess
	var userGuess = event.key;

	var remainingGuesses  = document.getElementById("remainingGuesses");

	var guessedLetters = document.getElementById("guessedletters");

	var numberofWins = document.getElementById("wins");
	// Setting up random word to guess
	var currentWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

	// Creating blank spaces for the word to guess 
	for (var i = 0; i < currentWord.length; i++) {
		answerArray[i] = "_"; 
	}

	// Injecting the current word to guess into the div
	document.querySelector("#currentWord").innerHTML = answerArray;

	var remainingLetters = currentWord.length;

		remainingGuesses.innerHTML = guesses;
		numberofWins.innerHTML = wins;

		function checkGuess (key) {
				var badGuess = true;
				for (var j = 0; j < currentWord.length; j++) {
					if (currentWord[j] === key) {
						console.log("Letters remaining " + remainingLetters, key, currentWord[j]);
						answerArray[j] = key;
						badGuess = false  						// remainingLetters--;
					} 
				}

					// Join connects an array
					if (answerArray.join("") === currentWord) {
						winCounter();
						musicPlay();
					}
			
					if (badGuess) {
							// Showing Remaining Guesses
							guesses--; 
							remainingGuesses.innerHTML = guesses;
							// Note: Shows up as undefined in browser.
							wrongGuess();
						}

					// if (answerArray.join("") === currentWord && badGuess = true) {
					// }

					// Updating the HTML
					document.querySelector("#currentWord").innerHTML = answerArray;
		}

// function statement - this function exists to call a function () accesses the functions actions
		function winCounter () {
				wins++; 
				document.getElementById("wins").innerHTML = wins;
			
		}

		function wrongGuess () {
			guessedLetters.innerHTML = userGuess;
		}

		
		// Game resets if guesses run out.
		function outOfGuesses () {

		}

		// Plays music when the correct word is guessed
		function musicPlay () {

			if (currentWord === "rocketeer") {
				rocketeer.play();
			} else if (currentWord === "legendofzelda") {
				legendofZelda.play();
			} else if (currentWord === "kingsquest") {
				kq6.play();
			} else if (currentWord === "baldursgate") {
				baldursGate.play();
			} else {
				audio.muted = true;
			}
		}

		function switchPicture () {

			if (currentWord === "rocketeer") {
				rocketeer.play(); 
			}
		}

  
		// Play winning music and show picture.
		// Change the word to guess.


		document.onkeyup = function(event) {
		// inside key up
		console.log("Inside Key Up!");

		 checkGuess(event.key);

		}
});