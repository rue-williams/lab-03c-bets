const userMoney = document.getElementById('user-money');
const betAmount = document.getElementById('bet-amount');
const buttonHigh = document.getElementById('high-bet');
const buttonLow = document.getElementById('low-bet');
const result = document.getElementById('result');
const output = document.getElementById('number-output');
let random = Math.random();

buttonHigh.addEventListener('click', () => {
    let random = Math.random();
    output.textContent = random;
    if (random > .5) {
        result.textContent = 'You Win!'
        userMoney.textContent = Number(userMoney.textContent) + Number(betAmount.value);
    } else {
        result.textContent = 'You Lose!'
        userMoney.textContent = Number(userMoney.textContent) - Number(betAmount.value);
    }
});

buttonLow.addEventListener('click', () => {
    let random = Math.random();
    if (random < .5) {
        result.textContent = 'You Win!'
        userMoney.textContent = Number(userMoney.textContent) + Number(betAmount.value);
    } else {
        result.textContent = 'You Lose!'
        userMoney.textContent = Number(userMoney.textContent) - Number(betAmount.value);
    }
});