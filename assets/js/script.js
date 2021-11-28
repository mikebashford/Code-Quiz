let questions = [
  {question: "Inside which HTML element do we put the JavaScript?", choice1: "<script>" , choice2: "<js>", choice3: "<javascript>", choice4: "<scripting>", correctAnswer: 1}, 
  {question:"Where is the correct place to insert a JavaScript?" , choice1: "The <body> section", choice2: "Both the <head> section and the <body> section are correct", choice3: "The <head> section", choice4: "The <footer> section", correctAnswer: 2}, 
  {question:"What is the correct syntax for referring to an external script called 'xxx.js'?", choice1: "<script src='xxx.js'" , choice2: "<script href='xxx.js'>", choice3: "<script name='xxx.js'>", choice4: "<script class='xxx.js'>", correctAnswer: 1}, 
  {question:"How do you write 'Hello World' in an alert box?", choice1: "alert('Hello World');", choice2: "msgBox('Hello World');", choice3: "msg('Hello World');", choice4: "alertBox('Hello World');", correctAnswer: 1},
  {question:"How do you create a function in JavaScript?", choice1: "function myFunction()", choice2: "function = myFunction()", choice3: "function:myFunction()", choice4: "function = new function()", correctAnswer: 1},
  {question:"How do you call a function named 'myFunction'?", choice1: "myFunction()" , choice2: "call myFunction()", choice3: "call function myFunction()", choice4: "<scripting>", correctAnswer: 1},
  {question:"How to write an IF statement in JavaScript?", choice1: "if (i == 5)" , choice2: "if i == 5 then", choice3: "if i = 5 then", choice4: "if i = 5", correctAnswer: 1},
  {question:"How does a WHILE loop start?", choice1: "while (i <= 10)" , choice2: "while i = 1 to 10", choice3: "while (i <= 10; i++)", choice4: "while(i = 10", correctAnswer: 1},
  {question:"How does a FOR loop start?", choice1: "for (i = 0; i <= 5; i++)" , choice2: "for (i = 0; i <= 5)", choice3: "for i = 1 to 5", choice4: "for (i <= 5; i++)", correctAnswer: 1},
  {question:"How can you add a comment in a JavaScript?", choice1: "//This is a comment", choice2: "'This is a comment", choice3: "<!--This is a comment-->", choice4: "!-This is a comment-!", correctAnswer: 1}];
  
const timerText = document.querySelector(".timer-text");
const timeLeft = document.querySelector(".timer-num");
const question = document.querySelector("#question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const saveScore = document.querySelector("#save");

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let acceptAnswer = true;
let availableQuestions = [];

// GIVEN I am taking a code quiz
// WHEN I click the start button
function startGame()
{
  score = 0;
  questionCounter = 0;
  availableQuestions = [...questions];
  startTimer();
  getQuestion();
}

// THEN a timer starts and I am presented with a question
function startTimer()
{
  timer = 60;
  timeLeft.innerText = timer;
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
function getQuestion()
{
  if(availableQuestions.length === 0)
  {
    endGame();
    return;
  }
  currentQuestion = availableQuestions[questionCounter];
  question.innerText = currentQuestion.question;

  choices.forEach(choice =>
  {
    const number = choice.dataset['value'];
    choice.innerText = currentQuestion[number];
  });

  // choices.forEach((choice) =>{
  //   choice.addEventListener("click", event =>{
  //     selectAnswer = e.target;
  //   })
  //   var selectedAnswer = selectAnswer.dataset["answer"];
  //   console.log(selectedAnswer);
  // })
  //questionCounter++;
  // getQuestion();
}


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endGame()
{
  console.log("Game is over, enter initials: ");
  return;
}
// WHEN the game is over
// THEN I can save my initials and score
function saveHighScores()
{
  console.log("High score saved!");
  return;
}

startGame();