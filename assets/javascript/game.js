document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  // Gets Link for Theme Song
  var rocketeer = new Audio("assets/music/rocketeer.mp3");
  var baldursGate = new Audio("assets/music/BaldursGate.mp3");
  var kq6 = new Audio("assets/music/KQ6.mp3");
  var legendofZelda = new Audio("assets/music/LegendofZelda.mp3");
  var finalFantasy = new Audio("assets/music/oneWingedAngel.mp3");
  var allMusic = [rocketeer, baldursGate, kq6, legendofZelda, finalFantasy];
  // Word bank
  var wordsToGuess = ["rocketeer", "kingsquest", "legendofzelda", "baldursgate", "finalfantasy"];
  // Sets win variable to 0 at start
  var wins = 0;
  // Current Word to guess
  var answerArray = [];
  // number of guesses remaining
  var guesses = 10;
  // stores wrong guesses
  var youGuessedWrong = [];

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
        answerArray[j] = key;
        badGuess = false;
      }
    }

    // Join connects an array
    if (answerArray.join("") === currentWord) {
      winCounter();
      switchPicture();
      musicPlay();
      nextGuess();
    }

    if (badGuess) {
      // Showing Remaining Guesses
      guesses--;
      remainingGuesses.innerHTML = guesses;
      youGuessedWrong.push(key); var joined = youGuessedWrong.join(""); guessedLetters.innerHTML = joined;
      outOfGuesses();
    }

    // Updating the HTML
    document.querySelector("#currentWord").innerHTML = answerArray;
  }

  // function statement - this function exists to call a function () accesses the functions actions
  // Main Functions
  function winCounter () {
    wins++;
    document.getElementById("wins").innerHTML = wins;
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
    } else if (currentWord === "finalfantasy") {
      finalFantasy.play();
    }
    else {
      audio.muted = true;
    }
  }

  // Switches out hangman picture when correct word is guessed
  function switchPicture () {
    if (currentWord === "rocketeer") {
      document.getElementById("mainimg").src="assets/images/theRocketeer.jpg";
    } else if (currentWord === "legendofzelda") {
      document.getElementById("mainimg").src="assets/images/LegendofZelda.jpg";
    } else if (currentWord === "kingsquest") {
      document.getElementById("mainimg").src="assets/images/KQ6.jpg";
    } else if (currentWord === "baldursgate") {
      document.getElementById("mainimg").src="assets/images/baldurs_gate.jpg";
    } else if (currentWord === "finalfantasy") {
      document.getElementById("mainimg").src="assets/images/FF7.jpg";
    }	else {
      document.getElementById("mainimg").src="assets/images/Hangman.jpg";
    }
  }

  // Start next new word to guess.
  function nextGuess () {
    var pauseMusic = setTimeout(function() {
      allMusic.stop();
    }, 1000);
    currentWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    answerArray = [""];
    for (var k = 0; k < currentWord.length; k++) {
      answerArray[k] = "_";
    }

    // Injecting the current word to guess into the div
    document.querySelector("#currentWord").innerHTML = answerArray;
  }

  // Game resets if guesses run out.
  function outOfGuesses   () {
    if (guesses === 0) {
      location.reload();
    }
  }

  // Event to take place on key press.
  document.onkeyup = function(event) {
    // inside key up
    console.log("Inside Key Up!");
    checkGuess(event.key);
  }
});
