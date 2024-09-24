/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
  setInterval(updateTimer, 1000);
  setInterval(generateCard, 10000);
};

let minutes = 0;
let seconds = 0;

function updateTimer() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "timer"
  ).innerHTML = `${displayMinutes}:${displaySeconds}`;
}

function randomize(r) {
  return r[Math.floor(Math.random() * r.length)];
}

function generateCard() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let topSymbol = randomize(symbols);
  let midValue = randomize(values);
  let botSymbol = topSymbol;

  if (topSymbol == "♦" || topSymbol == "♥") {
    document.getElementById(
      "cardTop"
    ).innerHTML = `<h3 class="specialSuit">${topSymbol}</h3>`;
    document.getElementById("cardMid").innerHTML = `<h3>${midValue}</h3>`;
    document.getElementById(
      "cardBot"
    ).innerHTML = `<h3 class="specialSuit">${botSymbol}</h3>`;
  }

  if (topSymbol == "♠" || topSymbol == "♣") {
    document.getElementById("cardTop").innerHTML = `<h3>${topSymbol}</h3>`;
    document.getElementById("cardMid").innerHTML = `<h3>${midValue}</h3>`;
    document.getElementById("cardBot").innerHTML = `<h3>${botSymbol}</h3>`;
  }
}

function newDimensions() {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;

  const card = document.getElementById("card");
  card.style.width = width + "px";
  card.style.height = height + "px";
}

//Buttons
document.getElementById("newCard").addEventListener("click", generateCard);
document
  .getElementById("newDimensions")
  .addEventListener("click", newDimensions);
