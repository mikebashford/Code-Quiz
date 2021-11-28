var questions = ["Inside which HTML element do we put the JavaScript?", "Where is the correct place to insert a JavaScript?", "What is the correct syntax for referring to an external script called 'xxx.js'?", "How do you write 'Hello World' in an alert box?", "How do you create a function in JavaScript?", "How do you call a function named 'myFunction'?", "How to write an IF statement in JavaScript?", "How does a WHILE loop start?", "How does a FOR loop start?", "How can you add a comment in a JavaScript?", "What is the correct way to write a JavaScript array?" ];
var correctAnswers = ["<script>", "Both the <head> section and the <body> section are correct", "<script src='xxx.js'>", "alert('Hello World');", "function myFunction()", "myFunction()", "if (i == 5)", "while (i <= 10)", "for (i = 0; i <= 5; i++)", "//This is a comment", "var colors = ['red', 'green', 'blue']"];
var timerText = document.querySelector(".timer-text");
var timeLeft = document.querySelector(".timer-num");
var userInitials = document.querySelector(".enter-initials");
var startGameText = document.querySelector("#start-game");
var startButton = document.querySelector("#start");
var saveScore = document.querySelector("#save");
var questionText = document.querySelector("#question");
var choiceButtons = document.querySelector("#choices");
const questionOne = ["<script>", "<js>", "<javascript>", "<scripting>"]
const questionTwo = ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "The <footer> section"];
const questionThree = ["<script src='xxx.js'", "<script href='xxx.js'>", "<script name='xxx.js'>", "<script class='xxx.js'>"];
const questionFour = [ "alert('Hello World');", "msgBox('Hello World');", "msg('Hello World');", "alertBox('Hello World');"];
const questionFive = ["function myFunction()", "function = myFunction()", "function:myFunction()", "function = new function()"];
const questionSix = ["myFunction()", "call myFunction()", "call function myFunction()", "myFunction.call()"];
const questionSeven = ["if (i == 5)", "if i == 5 then", "if i = 5 then", "if i = 5"];
const questionEight = ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while(i = 10"];
const questionNine = ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)"];
const questionTen = ["//This is a comment", "'This is a comment", "<!--This is a comment-->", "!-This is a comment-!"];
var questionChoices = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
var score;

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
  giveQuestion();
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
function giveQuestion()
{

  for(i = 0; i < questions.length; i++)
  {
    var h2 = document.createElement('h2');
    h2.innerHTML += questions[i];
    questionText.textContent = h2.innerHTML;
    questionText.setAttribute("style", "text-align:center; font-size:24px;");
    for(i = 0; i < 4; i++)
    {
      var button = document.createElement('button');
      $(button).addClass("btn btn-primary d-flex m-2 col-3");
      button.textContent = questionOne[i];
      document.getElementById("choices").appendChild(button);
      document.getElementById("choices").setAttribute("style", "display: block;");
    }
    if(true)
    {
      console.log("Correct!");
      return;
    }
    else
    {
      console.log("Wrong!")
      return;
    }
  }
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endGame()
{
  userInitials.setAttribute("style", "display:block;");
  console.log("Game is over, enter initials: ");
  return;
}
// WHEN the game is over
// THEN I can save my initials and score
function saveHighScores()
{
  console.log("High score saved!");
}

startButton.addEventListener("click", startGame);
saveScore.addEventListener("click", saveHighScores);