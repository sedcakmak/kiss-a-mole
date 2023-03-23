let moles = document.querySelectorAll(".mole-img");
const startButton = document.querySelector(".start-button");
let timerEle = document.querySelector("#timer");
const holes = document.querySelectorAll(".mound");
const scoreBoard = document.querySelector("#score");

let timeUp = false;
let lastMole;
let score = 0;

startButton.addEventListener("click", startGame);

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomMole(moles) {
  const idx = Math.floor(Math.random() * moles.length);
  const mole = moles[idx];
  if (mole === lastMole) {
    console.log("Ah nah thats the same one bud");
    return randomMole(moles);
  }
  lastMole = mole;
  return mole;
}

function peep() {
  const time = randomTime(400, 2000); //200, 1000
  const mole = randomMole(moles);
  mole.classList.add("up");
  setTimeout(() => {
    mole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timerEle.innerHTML = 30;
  score = 0;
  peep();
  countdown();
}

function countdown() {
  var timeleft = 30;
  var countdown = setInterval(function () {
    timeleft -= 1;
    timerEle.innerHTML = timeleft;
    if (timeleft === 0) {
      clearInterval(countdown);
      timeUp = true;
    }
  }, 30000);
}

function bonk(e) {
  // if (!e.isTrusted) return; // cheater!
  score++;
  console.log(e.target);
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));

// function enterMoles() {
//   if (!timeUp) {
//     moles.forEach((mole) => mole.classList.remove("anim"));
//     const randomNumbers = Array.from({ length: 6 }, () =>
//       Math.floor(Math.random() * 6)
//     );
//     const time = randomTime(200, 1000);

//     randomNumbers.forEach((number) => {
//       setTimeout(function () {
//         moles[number].classList.add("anim");
//       }, 1000);
//     });
//   }
// }

//   let numbers = [];
//   while (numbers.length < moles.length) {
//     let random = Math.floor(Math.random() * moles.length) + 1;
//     if (!numbers.includes(random)) {
//       numbers.push(random);
//     }
//   }
//   console.log(numbers);

//   numbers.forEach((number) => {
//     moles[number].classList.add("anim");
//   });
// }

// let lastMole;
// function randomMole() {
//   let mole = moles[Math.floor(Math.random() * moles.length)];
//   if (mole === lastMole) {
//     // console.log("Ah nah thats the same one bud");
//     return randomHole(moles);
//   }
//   lastMole = mole;
//   console.log(mole);
//   mole.classList.add("anim");
// }
//randomMole();

// function startGame() {
//   console.log("calisiyor mu??");
//   countdown();
//   setInterval(enterMoles, 3000);
// }

// function randomTime(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// function enterMoles() {
//   const randomNumbers = Array.from({ length: 6 }, () =>
//     Math.floor(Math.random() * 6)
//   );
//   const time = randomTime(200, 1000);

//   randomNumbers.forEach((number) => {
//     moles[number].classList.add("up");
//   });
//   setTimeout(function () {
//     moles.forEach((mole) => {
//       mole.classList.remove("up");
//       if (!timeup) enterMoles();
//     });
//   }, time);
// }
