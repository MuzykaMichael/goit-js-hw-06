function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const base = 30;
const controls = document.querySelector('#controls')


const input = document.querySelector('number');
const boxes = document.querySelector('#boxes');

const boxHold = [];


function createBoxes(amount) {
  if (amount > input.getAttribute("max") || amount < input.getAttribute("min")) {
    alert("Ваше число не підходить! Оберіть інше.")
  } else {
    for (let i = 0; i <= amount; i+=input.getAttribute("step")) {
      const newBox = boxes.createElement("div");
      const grhc = getRandomHexColor();
      newBox.style.backgroundColor = grhc;
      newBox.style.width = `${base+i*10}px`;
      newBox.style.height = `${base+i*10}px`;
      boxHold.push(newBox);
    }
  boxes.append(...boxHold)
  }
}

function destroyBoxes () {
  
}

