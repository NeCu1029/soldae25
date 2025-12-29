const rand1 = document.getElementById("rand1");
const rand2 = document.getElementById("rand2");
const rand3 = document.getElementById("rand3");
const diff = document.getElementById("diff");
const btn = document.querySelector("button");
const tier = ["B", "S", "G", "P", "D", "R"];

function handleClick() {
  rand1.innerHTML = Math.floor(Math.random() * 2) + 1;
  rand2.innerHTML = Math.floor(Math.random() * 10);
  rand3.innerHTML = Math.floor(Math.random() * 10);
  diff.innerHTML =
    tier[Math.floor(Math.random() * 6)] + (Math.floor(Math.random() * 5) + 1);
}

btn.addEventListener("click", handleClick);
