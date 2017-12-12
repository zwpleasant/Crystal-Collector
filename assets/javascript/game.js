$(document).ready(function() {
  // process for game loop
    var winCount = 0; // counter for game wins
    var lossCount = 0; // counter for game losses
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

  // create function for a game win
  // create function for a game loss

  // create on click function for crystalOne
  // create on click function for crystalTwo
  // create on click function for crystalThree
  // create on click function for crystalFour
  $(".btn").click(function() {

  });

  // if user score is less than game value, continue
  // if user score is equal to game value, log win for user and restart
  // if user score is more than game value, log loss for user and restart
});
