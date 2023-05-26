"use strict";
/*
document.querySelector(".message").textContent = "Correct number 🎉";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 15;
// document.querySelector(".highscore").textContent = 17;
// console.log(document.querySelector(".check").value);

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value = 23);

*/

let randNum = Math.trunc(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // não tem imput do jogador
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No number!";
    displayMessage("⛔ No number!");
    // quando o player ganha
  } else if (guess === randNum) {
    // document.querySelector(".message").textContent = "Correct number 🎉";
    displayMessage("Correct number 🎉");
    document.querySelector(".number").textContent = randNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== randNum) {
    if (score > 1) {
      displayMessage(guess > randNum ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("You lost the game! 😢");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randNum = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
