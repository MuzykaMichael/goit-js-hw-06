const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')


input.addEventListener("input",fzw)

text.style.fontSize = `${input.value}px`;
function fzw () {
    const size = `${input.value}px`;
    text.style.fontSize = size;
}