let timerEle = document.querySelector("#timer");
let grounds = document.querySelectorAll(".ground");
const score = document.querySelector("#score");
const finalScore = document.querySelector("#final-score");
let timeUp = false;
let timerImg = document.querySelector(".timer-img");
let smackImg = document.querySelector(".smack");
let kisses = document.querySelectorAll(".kiss");

window.addEventListener("load", () => {
  document.querySelector(".start-button").addEventListener("click", () => {
    startGame();
  });
});

let lastGround;
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomGround(grounds) {
  const idx = Math.floor(Math.random() * grounds.length);
  const ground = grounds[idx];
  if (ground === lastGround) {
    console.log("Ah nah thats the same one bud");
    return randomGround(grounds);
  }
  lastGround = ground;
  return ground;
}

function peep() {
  const time = randomTime(400, 2000); //200, 1000
  const ground = randomGround(grounds);
  ground.classList.add("active");
  setTimeout(() => {
    ground.classList.remove("active");
    smackImg.classList.remove("popup");
    kisses.forEach((kiss) => {
      kiss.style.opacity = "0";
      kiss.classList.remove("animate");
    });
    if (!timeUp) peep();
  }, time);
}

function countdown() {
  var timeleft = 30;
  var countdown = setInterval(function () {
    timeleft -= 1;
    timerEle.innerHTML = timeleft;
    if (timeleft === 0) {
      clearInterval(countdown);
      timeUp = true;
      timerImg.classList.add("popup");

      modal.style.display = "block";
    }
  }, 1000);
}

const startGame = () => {
  timerEle.innerHTML = 30;
  let count = 0;
  peep();
  countdown();

  const length = grounds.length;

  grounds.forEach((e) => {
    e.addEventListener("click", () => {
      //If ground has active class which means it has mole
      //So increase the count
      if (e.classList.contains("active")) {
        smackImg.classList.add("popup");
        kisses.forEach((kiss) => {
          kiss.style.opacity = "1";
          kiss.classList.add("animate");
        });
        count++;
        score.innerHTML = count;
        finalScore.innerHTML = count;
      }
    });
  });

  // var interval = setInterval(() => {
  //   //Generate a random number
  //   const random = Math.floor(Math.random() * length);

  //   //Remove the active class from every ground
  //   grounds.forEach((e) => {
  //     e.classList.remove("active");
  //   });

  //   //Add the active class to random ground
  //   grounds[random].classList.add("active");
  // }, 700);
};

// FINALE MODAL

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
