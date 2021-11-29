var questions = [
  {question: "Inside which HTML element do we put the JavaScript?", choice1: "<script>" , choice2: "<js>", choice3: "<javascript>", choice4: "<scripting>", correctAnswer: 1}, 
  {question:"Where is the correct place to insert a JavaScript?" , choice1: "The <body> section", choice2: "Both the <head> section and the <body> section are correct", choice3: "The <head> section", choice4: "The <footer> section", correctAnswer: 2}, 
  {question:"What is the correct syntax for referring to an external script called 'xxx.js'?", choice1: "<script class='xxx.js'" , choice2: "<script href='xxx.js'>", choice3: "<script name='xxx.js'>", choice4: "<script src='xxx.js'>", correctAnswer: 4}, 
  {question:"How do you write 'Hello World' in an alert box?", choice1: "msgBox('Hello World');", choice2: "alert('Hello World');", choice3: "msg('Hello World');", choice4: "alertBox('Hello World');", correctAnswer: 2},
  {question:"How do you create a function in JavaScript?", choice1: "function myFunction()", choice2: "function = myFunction()", choice3: "function:myFunction()", choice4: "function = new function()", correctAnswer: 1},
  {question:"How do you call a function named 'myFunction'?", choice1: "call myFunction()" , choice2: "myFunction()", choice3: "call function myFunction()", choice4: "<scripting>", correctAnswer: 2},
  {question:"How to write an IF statement in JavaScript?", choice1: "if i = 5" , choice2: "if i == 5 then", choice3: "if i = 5 then", choice4: "if (i == 5)", correctAnswer: 4},
  {question:"How does a WHILE loop start?", choice1: "while (i <= 10)" , choice2: "while i = 1 to 10", choice3: "while (i <= 10; i++)", choice4: "while(i = 10", correctAnswer: 1},
  {question:"How does a FOR loop start?", choice1: "for (i = 0; i <= 5)" , choice2: "for (i = 0; i <= 5; i++)", choice3: "for i = 1 to 5", choice4: "for (i <= 5; i++)", correctAnswer: 2},
  {question:"How can you add a comment in a JavaScript?", choice1: "<!--This is a comment-->", choice2: "'This is a comment", choice3: "//This is a comment", choice4: "!-This is a comment-!", correctAnswer: 3}];
  
var timerText = document.querySelector(".timer-text");
var timeLeft = document.querySelector(".timer-num");
var question = document.querySelector("#question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var currentScore = document.querySelector(".score");
var divider = document.querySelector(".divider");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var quizGame = document.querySelector(".container");
var saveScoreScreen = document.querySelector(".end-game");

var userInitials = document.getElementById("user-initials");
var saveScore = document.getElementById("save");
var finalScore = document.querySelector(".score");
var lastScore = localStorage.getItem("score");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var currentQuestion = {};
var score = 0;
var questionCounter = 0;
var acceptAnswer = false;
var timer = 60;

// GIVEN I am taking a code quiz
// WHEN I click the start button
function startGame()
{
  score = 0;
  questionCounter = 0;
  currentScore = score;
  startTimer();
  getQuestion();
}

// THEN a timer starts and I am presented with a question
function startTimer()
{
  timeLeft.innerText = timer;
  setInterval(function()
  {
    if(timer > 0)
    {
      timer--;
      timeLeft.innerText = timer;
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
function getQuestion()
{
  if(questions.length >= 0)
  {
    divider.setAttribute("style", "visibility: hidden; width: 100%;")
    correct.setAttribute("style", "visibility: hidden;")
    wrong.setAttribute("style", "visibility: hidden;")
  }

  if(questions.length === 0)
  {
    endGame();
    return;
  }
  currentQuestion = questions[questionCounter];
  question.innerText = currentQuestion.question;

  choices.forEach(choice =>
  {
    var number = choice.dataset['value'];
    choice.innerText = currentQuestion[number];
  });

  questions.splice(questionCounter, 1);
  acceptAnswer = true;
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endGame()
{
  myScoreStorage = window.localStorage;
  localStorage.setItem("score", score);
  saveScoreScreen.setAttribute("style", "visibility:visible;");
  quizGame.setAttribute("style", "visibility: hidden;");
}
// WHEN the game is over
// THEN I can save my initials and score

choices.forEach(choice =>
{
  choice.addEventListener('click', event =>
  {
    if(!acceptAnswer)
    {
      return;
    }
    acceptAnswer = false;
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.dataset['value'];
    if(selectedAnswer === "choice" + currentQuestion.correctAnswer)
    {
      divider.setAttribute("style", "visibility: visible; width: 100%;")
      correct.setAttribute("style", "visibility: visible;")
      score++;
    }
    else
    {
      timer -= 3;
      divider.setAttribute("style", "visibility: visible; width: 100%;")
      wrong.setAttribute("style", "visibility: visible;")
    }
    setTimeout( function()
    {
      getQuestion();
    } , 1000);
  });
});


finalScore.innerText = lastScore;

userInitials.addEventListener('keyup', () => {
  saveScore.disabled = !userInitials.value;
});

var saveScore = function(event)
{
  event.preventDefault();

  var scoreBoard = {
    score: lastScore,
    name: userInitials.value
  };

  highScores.push(scoreBoard);
  highScores.sort((a,b) => b.score - a.score);
  highScores.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScores));
}

startGame();
