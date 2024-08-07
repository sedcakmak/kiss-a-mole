const timerEle = document.querySelector("#timer");
const grounds = document.querySelectorAll(".ground");
const moles = document.querySelectorAll(".mole");
const score = document.querySelector("#score");
const finalScore = document.querySelector("#final-score");
let timeUp = false;
const timerImg = document.querySelector(".timer-img");
const smackImg = document.querySelector(".smack");
const startButton = document.querySelector(".start-button");
const closeModalButton = document.getElementById("close-btn");

let sound;
let kissSfx;

window.addEventListener("load", () => {
  startButton.addEventListener("click", () => {
    sound = new Howl({
      src: ["./sounds/enter1.wav"],
      html5: true,
    });
    kissSfx = new Howl({
      src: ["./sounds/kiss.mp3"],
    });
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

function randomFace() {
  let faces = ["rotateY(180deg)", "rotateY(0deg)"];
  for (i = 0; i < moles.length; i++) {
    moles[i].style.transform = faces[Math.floor(Math.random() * faces.length)];
  }
}
randomFace();

function peep() {
  const time = randomTime(400, 1200);
  const ground = randomGround(grounds);
  ground.classList.add("active");
  sound.play();
  setTimeout(() => {
    ground.classList.remove("active");
    smackImg.classList.remove("popup");

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
      startButton.disabled = false;
    }
  }, 1000);
}

const startGame = () => {
  timerEle.innerHTML = 30;
  let count = 0;
  peep();
  countdown();
  startButton.disabled = true;

  grounds.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.classList.contains("active")) {
        smackImg.classList.add("popup");
        kissSfx.play();
        count++;
        score.innerHTML = count;
        finalScore.innerHTML = count;
      }
    });
  });
};

// FINALE MODAL

var modal = document.getElementById("myModal");

closeModalButton.onclick = function () {
  window.location.reload();
};
