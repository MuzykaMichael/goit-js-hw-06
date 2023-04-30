function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const contr = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create"),
  destroyBtn: document.querySelector("button[data-destroy"),
  boxes: document.querySelector("#boxes")
};

contr.createBtn.addEventListener("click", createBtnClick);
contr.destroyBtn.addEventListener("click", destroyBtnClick);

function createBtnClick() {
  let boxHold = [];
  const boxNumber = +contr.input.value;
  const minValue = +contr.input.min;
  const maxValue = +contr.input.max;
  const step = +contr.input.step;

  if (boxNumber < minValue || boxNumber > maxValue){
    return
  }
  for (let i = 0; i<boxNumber; i+=step) {
    boxHold.push(i);
  }

  const markup = boxHold
  .map((box,index) => {
    box = `<div style="width: ${30 + index * 10}px; height: ${30 + index * 10}px; background-color: ${getRandomHexColor()};"></div>`;
    return box;
  })
  .join("");

  contr.boxes.insertAdjacentHTML("beforeend", markup);
  boxHold = [];
}

function destroyBtnClick() {
  contr.boxes.innerHTML = "";
  contr.input.value = "";
}