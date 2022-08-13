const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('[data-action=decrement]');
const incrementBtn = document.querySelector('[data-action=increment]');
const valueEl = document.querySelector('#value');

const clickDecrement = () => {
    counterValue.decrement()
    valueEl.textContent = counterValue.value
}
decrementBtn.addEventListener('click', clickDecrement);

const clickIncrement = () => {
    counterValue.increment()
    valueEl.textContent = counterValue.value
    }
incrementBtn.addEventListener('click', clickIncrement)