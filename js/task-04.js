let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

const value = document.querySelector('#value')

const plus = () => {
    counterValue+=1;
    value.innerHTML = counterValue;
}

const minus = () => {
    counterValue-=1;
    value.innerHTML = counterValue;
}

plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click",minus);

