$(document).ready(function() {
  // process for game loop
    var winCount = 0; // counter for game wins
    var lossCount = 0; // counter for game losses
    var userScore = 0; // counter for user score
    var gameScore = Math.floor(Math.random() * 102) + 19; // creates game score, a random number between 19-120
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12
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

  // creates on click function for crystalOne
  $("#crystal1").click(function() {
    userScore = userScore + crystalOne; // adds value of crystalOne to userScore
    console.log("User Score: " + userScore);
    $("#uScore").text("User Score: " + userScore);
      // if (userScore === gameScore) {
      //   // function for a game win
      // } else if {
      //   //function for a game loss
      // }
  });

  // creates on click function for crystalTwo
  $("#crystal2").click(function() {
    userScore = userScore + crystalTwo; // adds value of crystalTwo to userScore
    console.log("User Score: " + userScore);
    $("#uScore").text("User Score: " + userScore);
      // if (userScore === gameScore) {
      //   // function for a game win
      // } else if {
      //   //function for a game loss
      // }
  });

  // creates on click function for crystalThree
  $("#crystal3").click(function() {
    userScore = userScore + crystalThree; // adds value of crystalThree to userScore
    console.log("User Score: " + userScore);
    $("#uScore").text("User Score: " + userScore);
      // if (userScore === gameScore) {
      //   // function for a game win
      // } else if {
      //   //function for a game loss
      // }
  });

  // creates on click function for crystalFour
  $("#crystal4").click(function() {
    userScore = userScore + crystalFour; // adds value of crystalFour to userScore
    console.log("User Score: " + userScore);
    $("#uScore").text("User Score: " + userScore);
      // if (userScore === gameScore) {
      //   // function for a game win
      // } else if {
      //   //function for a game loss
      // }
  });

  // if user score is less than game value, continue
  // if user score is equal to game value, log win for user and restart
  // if user score is more than game value, log loss for user and restart
});
