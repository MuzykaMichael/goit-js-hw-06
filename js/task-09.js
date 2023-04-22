function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");


function zxc() {
  const grhc = getRandomHexColor();
  body.style.backgroundColor = grhc;
  color.textContent = grhc;
}

btn.addEventListener("click", zxc)