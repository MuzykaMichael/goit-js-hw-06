const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')


input.addEventListener("change",fzw)


function fzw () {
    const size = `${input.value}px`;
    text.style.fontSize = size;
}