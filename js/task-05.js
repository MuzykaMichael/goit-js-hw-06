const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const std = () => {
    if (input.value.trim() === ""){
        output.textContent = "Anonymous";
    }
    else {
        output.textContent = input.value
    }
}
input.addEventListener("input",std)