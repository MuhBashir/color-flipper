const colors = ["red", "green", "#f56785", "blue", "teal"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

for (let i = 0; i < colors.length; i++) {
  btn.addEventListener("click", () => {
    document.body.style.background = colors[randomNumber()];
    color.textContent = colors[randomNumber()];
  });
}

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
