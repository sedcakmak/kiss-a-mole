let moles = document.querySelectorAll(".mole-img");
const startButton = document.querySelector(".start-button");
let timerEle = document.querySelector("#timer");
let scoreEle = document.getElementById("score");
let timeUp = false;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("calisiyor mu??");
  countdown();
  setInterval(enterMoles, 3000);
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
  }, 1000);
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function enterMoles() {
  if (!timeUp) {
    moles.forEach((mole) => mole.classList.remove("anim"));
    const randomNumbers = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 6)
    );
    const time = randomTime(200, 1000);

    randomNumbers.forEach((number) => {
      setTimeout(function () {
        moles[number].classList.add("anim");
      }, 1000);
    });
  }
}

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
