$(document).ready(function() {
  // process for game loop

  // set variables for tracking win count and loss count
  var winCount = 0;
  var lossCount = 0;

  // resets the values of the game back to 0
  function resetGame() {
    var gameScore = 0;
    var userScore = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    $("#uScore").append(" " + userScore);
  }

  // sets game score to random number (between 19-120) and sets random values to crystals 1/2/3/4
  function startGame() {
    var userScore = 0;
    var gameScore = Math.floor(Math.random() * 102) + 19; // creates random number between 19-120
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    $("#gScore").append(" " + gameScore);
    $("#uScore").append(" " + userScore);
    console.log(gameScore);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
  }

  startGame();

  $(".btn").click(function() {
    
  });

  // if user score is less than game value, continue
  // if user score is equal to game value, log win for user and restart
  // if user score is more than game value, log loss for user and restart
});
