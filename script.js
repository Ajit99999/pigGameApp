"use strict";
let scoreList = document.querySelectorAll(".score");
let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#score--1");
score1.textContent = 0;
score2.textContent = 0;
let currentscore0 = document.querySelector("#current--0");
let currentscore1 = document.querySelector("#current--1");
let score = 0;
let player1 = document.querySelector(".player--0").classList;
let player2 = document.querySelector(".player--1").classList;
const activeClassAdd = () => {
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
};
const activeClassRemove = () => {
  document.querySelector(".player--1").classList.add("player--active");
  document.querySelector(".player--0").classList.remove("player--active");
};
const winnerClassAddPlayer1 = () => {
  document.querySelector(".player--0").classList.add("player--winner", "name");
};
const winnerClassAddPlayer2 = () => {
  document.querySelector(".player--1").classList.add("player--winner", "name");
};

let playingState = true;
document.querySelector(".btn--roll").addEventListener("click", () => {
  if (playingState) {
    let number = Number(Math.trunc(Math.random() * 6 + 1));
    if (number !== 1) {
      document.querySelector(".dice").src = `dice-${number}.png`;
      document.querySelector(".dice").classList.remove("hidden");
      if (player1.contains("player--active")) {
        score += number;
        currentscore0.textContent = score;
      } else if (player2.contains("player--active")) {
        score += number;
        currentscore1.textContent = score;
      }
    } else if (number === 1) {
      document.querySelector(".dice").src = `dice-${number}.png`;
      document.querySelector(".dice").classList.remove("hidden");

      if (player1.contains("player--active")) {
        currentscore0.textContent = 0;
        score = 0;
        activeClassRemove();
      } else if (player2.contains("player--active")) {
        currentscore1.textContent = 0;
        score = 0;
        activeClassAdd();
      }
    }
  }
});
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
document.querySelector(".btn--hold").addEventListener("click", () => {
  if (playingState) {
    if (player1.contains("player--active")) {
      let currentScorePlayer1 = Number(currentscore0.textContent);
      totalScorePlayer1 += currentScorePlayer1;
      score1.textContent = totalScorePlayer1;
      currentscore0.textContent = 0;
      score = 0;
      activeClassRemove();
    } else if (player2.contains("player--active")) {
      let currentScorePlayer2 = Number(currentscore1.textContent);
      totalScorePlayer2 += currentScorePlayer2;
      score2.textContent = totalScorePlayer2;
      currentscore1.textContent = 0;
      score = 0;
      activeClassAdd();
    }

    if (Number(score1.textContent) >= 50) {
      winnerClassAddPlayer1();
      playingState = false;
      document.querySelector(".dice").classList.add("hidden");
    } else if (Number(score2.textContent) >= 50) {
      winnerClassAddPlayer2();
      playingState = false;
      document.querySelector(".dice").classList.add("hidden");
    }
  }
});
document.querySelector(".btn--new").addEventListener("click", () => {
  playingState = true;
  score1.textContent = 0;
  score2.textContent = 0;
  currentscore0.textContent = 0;
  currentscore1.textContent = 0;
  activeClassAdd();
  document
    .querySelector(".player--0")
    .classList.remove("player--winner", "name");
  document
    .querySelector(".player--1")
    .classList.remove("player--winner", "name");
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
});
