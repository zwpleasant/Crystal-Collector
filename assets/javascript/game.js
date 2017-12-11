$(document).ready(function() {
  // process for game loop

  // set variables for win count, loss count, game score, user score, and crystals one, two, three and four
  var winCount = 0;
  var lossCount = 0;

  // create a function that sets game score to random number (between 19-120) and sets random values to crystals 1/2/3/4
  function reset() {
    var gameScore = Math.floor(Math.random() * 102) + 19; // creates random number between 19-120
    var userScore = 0;
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates random number between 1-12
    console.log(gameScore);
    console.log(userScore);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
  }

  reset();

  $(".btn").click(function() {
    alert("You clicked this button");
  });

  // on click function for each jewel that adds its number to user score
  // create a function for game play that involves if statement
  // if user score is less than game value, continue
  // if user score is equal to game value, log win for user and restart
  // if user score is more than game value, log loss for user and restart
});
