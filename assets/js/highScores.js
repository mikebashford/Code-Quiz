var highScoresList = document.getElementById("high-score-list");
var clearScores = document.getElementById("clear-scores");
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML =  highScores.map(score =>
{
  return `<li class="high-score-list">${score.name} ${score.score}</li>`;
}).join("");

function clearScoreList()
{
  localStorage.clear();
}

clearScores.addEventListener("click", clearScoreList);
