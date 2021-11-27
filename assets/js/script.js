var questions = [];
var answers = [];
var correctAnswers = [];
var timerText = document.querySelector(".timer-text");
var timeLeft = document.querySelector(".timer-num");
var score;
var userInitials = document.querySelector(".enter-initials");
var startGameText = document.querySelector("#start-game");
var startButton = document.querySelector("#start");
var saveScore = document.querySelector("#save");

// GIVEN I am taking a code quiz
// WHEN I click the start button
function startGame()
{
  startGameText.setAttribute("style", "display:none;");
  startTimer();
}

// THEN a timer starts and I am presented with a question
function startTimer()
{
  timer = 60;
  timeLeft.textContent = timer;
  setInterval(function()
  {
    if(timer > 0)
    {
      timer--;
      timeLeft.textContent = timer;
      return timeLeft.value;
    }
    else{
      clearInterval();
      endGame();
    }
  }, 1000);
}
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
function answerQuestion()
{

}
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endGame()
{
  var endGameText = document.getElementById("#end-game");
  if(endGameText.style.display === "none")
  {
    endGameText.style.display = "block";
  }
  else
  {
    endGameText.style.display = "none";
  }
  console.log("Game is over, enter initials: ")
}
// WHEN the game is over
// THEN I can save my initials and score
function saveHighScores()
{

}

startButton.addEventListener("click", startGame);
saveScore.addEventListener("click", saveHighScores);