let moles = document.querySelectorAll(".mole-img");
console.log(moles.length);
// moles.forEach((mole) => {
//   mole.classList.add("anim");
// });

let lastMole;

function randomMole() {
  let mole = moles[Math.floor(Math.random() * moles.length)];
  if (mole === lastMole) {
    console.log("Ah nah thats the same one bud");
    return randomHole(moles);
  }
  lastMole = mole;
  console.log(mole);
  mole.classList.add("anim");
}
randomMole();
