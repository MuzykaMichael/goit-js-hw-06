function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const base = 30;
const input = document.querySelector('number');
const amount = input;
const boxes = document.querySelector('#boxes');
function createBoxes(amount) {
  for (let i = 0; i <= amount; i+=1) {
    const newBox = boxes.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${base}px`;
    newBox.style.height = `${base}px`;
    const anotherBox = boxes.createElement("div");
    anotherBox.style.backgroundColor = getRandomHexColor();
    anotherBox.style.width = `${base+i*10}px`;
    anotherBox.style.height = `${base+i*10}px`;
    boxes.append(newBox, anotherBox);
  }
}

function destroyBoxes () {
  newBox.remove();
  anotherBox.remove();
}

const createBtn = document.querySelector('button[data-action="create"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

createBtn.addEventListener("create",createBoxes(amount));

destroyBtn.addEventListener("destroy",destroyBoxes);