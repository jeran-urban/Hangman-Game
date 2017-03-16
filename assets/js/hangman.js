// Defines global variable(s)
var wins = 0;
var losses = 0;
looping()

function looping() {
  var wordList = ["dog", "cat", "bird", "thankful", "bored", "laughing"];
  var word = wordList[Math.floor(Math.random()*wordList.length)];
  var guessed = "";
  var placeWord = [];
  placeWord.length = word.length;
  placeWord = placeWord.fill("_ ");
  var guessNumber = 0;
  var guessTotal = 0;

  if (wins === 3) {
    var myElement = document.querySelector("#easteregg");
    myElement.style.display = "inline";
  }
  else {
    var myElement = document.querySelector("#easteregg");
    myElement.style.display = "none";
  }


  // Here we create the HTML that will be injected into our div and displayed on the page.
  var currentWord = "<p>Guess the word: " + placeWord.join("") + "</p>";
  
  var guesses = "<p>Current Guesses: " + guessed + "</p>" +
  "<p>total guesses: " + guessTotal + "</p>" +
  "<p>Wrong guesses: " + guessNumber + " out of 3</p>";
  
  var score = "<p>wins: " + wins + "</p>" +
  "<p>losses: " + losses + "</p>";
  // Injecting the HTML we just created into our div and updating the game information on our page.
  document.querySelector("#score").innerHTML = score;
  document.querySelector("#currentword").innerHTML = currentWord;
  document.querySelector("#guesses").innerHTML = guesses;
    
  document.onkeyup = function(event) {

    // Determines which key was pressed
    var user = event.key;
    hangman(user)
  };

  function hangman(user) {
    //Sets local variable(s)
    var userc = user.toLowerCase();

    //Checks to see if they already guessed the letter
    if (guessed.indexOf(userc) === -1) {
      guessed += userc + ", ";
      guessTotal += 1;

      //Checks to see if the letter is correct
      for (var ix = 0; ix < word.length; ix++) {
        if (userc === word[ix]) {
          //Fills in the corresponding blanks
          placeWord.splice(ix, 1, userc);
        }
      }

      //adds 1 to wrong guess
      if (placeWord.indexOf(userc) === -1) {
        guessNumber += 1;
      }
    }
    else {
      alert("You already guessed the letter " + user)
    }

    //***********Checks to see if they won, lost, or still playing************//
    if (placeWord.join("") === word) {
      alert("congrats, you guessed the word " + word + " in " + guessTotal + " guesses");
      wins += 1;
      looping()
    }

    else if (guessNumber === 3) {
      alert("Sorry, you guessed: " + guessed + " the word was " + word + " Try harder this time...");
      losses += 1;
      looping()
    }

    else {
      // Here we create the HTML that will be injected into our div and displayed on the page.
      var currentWord = "<p>Guess the word: " + placeWord.join("") + "</p>";
      var guesses = "<p>Current Guesses: " + guessed + "</p>" +
      "<p>total guesses: " + guessTotal + "</p>" +
      "<p>Wrong guesses: " + guessNumber + " out of 3</p>";

      // Injecting the HTML we just created into our div and updating the game information on our page.
      document.querySelector("#guesses").innerHTML = guesses;
      document.querySelector("#currentword").innerHTML = currentWord;
    }
    //***********                   Done Check                  ************//
  } // end function hangman //
} // end function looping //
