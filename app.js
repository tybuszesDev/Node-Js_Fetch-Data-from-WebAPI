// ZADANIE 1

// // http://numbersapi.com/random/year?json
// // npm install node-fetch

// const fetch = require("node-fetch");

// //JAK USTALIĆ CO WPIASALISMY ?

// const year = process.argv[2] || Math.floor(Math.random() * 2021); //drogi argument jaki podajemy w terminalu
// console.log(year);

// fetch(`http://numbersapi.com/${year}/year?json`)
//   .then((response) => response.json())
//   .then((data) => console.log(data.text))
//   .catch((error) => console.log("error ", error));

//ZADANIE 2
//`http://numbersapi.com/${number}/${type}?json`

// console.log(process.argv);
const arg = process.argv[2];
let type = "";

if (arg.indexOf("--year") === 0) {
  console.log("szukamy informacji o roku...");
  type = "year";
} else if (arg.indexOf("--math") === 0) {
  console.log("szukamy info o liczbie...");
  type = "math";
} else if (arg.indexOf("--trivia") === 0) {
  console.log("szukamy liczby-ciekawostki...");
  type = "trivia";
}

const equalSign = arg.search("=");
// console.log(equalSign);

if (equalSign === -1) console.log("nie wpisales liczby!");

const number = arg.slice(equalSign + 1) || 1;

if (number === "" || isNaN(Number(number))) {
  console.log("to nie jest liczba");
  process.exit();
}
const fetch = require("node-fetch");

fetch(`http://numbersapi.com/${number}/${type}?json`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else throw new Error("ooooo coś nie tak: " + response.status);
  })
  .then((data) => console.log(data.text))
  .catch((error) => console.log("error ", error));
