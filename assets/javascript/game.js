
  // set array contaning alphabet
  var letters = ["a", "b", "c", "d", "e", "f", "g",
                 "h", "i" ,"j", "k", "l" ,"m", "n", "o", "p",
                 "q", "r", "s" ,"t", "u","v", "w", "x" ,"y", "z"]
  // game randomly selects one letter for alphabet array and sets as secretLetter
  var secretLetter = letters[Math.floor(Math.random() * letters.length)]
  console.log(secretLetter)

  var wins = 0;
  console.log("wins: " + wins);
  var losses = 0;
  console.log("losses: " + losses);

$(document).ready(function(){
  /* ===========Loop Begins========= */
  // This function is run whenever the user presses a key.
var GuessesLeftCounter = 6;
  document.onkeyup = function(event) {
    // give the user 6 chances to guess and decrement by 1 every loop; Only escape loop if guesses are expired OR if user correctly guesses secret letter
    // for (var GuessesLeftCounter = 6; GuessesLeftCounter >= 0; GuessesLeftCounter--) {

    GuessesLeftCounter--
      console.log ("Guesses Left: " + GuessesLeftCounter);
      document.querySelector("#Wins").innerHTML = "Wins: " + wins;
      document.querySelector("#Losses").innerHTML = "Losses: " + losses;
      document.querySelector("#GuessesLeft").innerHTML = "Guesses Left: " + GuessesLeftCounter;
      // Listen for key press from guess from user
      var userGuess = event.key;
      var GuessesThusFar = [];

      var newDiv = document.createElement("div");
      // newDiv.appendChild(userGuess);
      document.getElementById("GuessesThusFar").appendChild(newDiv);
      var newContent = document.createTextNode(userGuess);
      newDiv.appendChild(newContent);
// console.log(document.getElementById("GuessesThusFar"));
      // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
      if (userGuess === secretLetter) {
        wins++;
        console.log("wins: " + wins);
        alert ("You must be psychic! You guessed the correct letter: " + secretLetter)
      }
      // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
      else if (GuessesLeftCounter == 0) {
        losses++;
        console.log("losses: " + losses);
        alert ("Sorry, you may not be psychic")
      }

    // }
  }
});
