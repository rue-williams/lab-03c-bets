const userMoney = document.getElementById('user-money');
const betAmount = document.getElementById('bet-amount');
const buttonHigh = document.getElementById('high-bet');
const buttonLow = document.getElementById('low-bet');
const result = document.getElementById('result');
const output = document.getElementById('number-output');
let money = 1000;

function showWin() {
    result.textContent = 'You Win!';
};
function showLoss() {
    result.textContent = 'You did not win!';
};
function updateMoney(bet) {
    money = money + bet;
    userMoney.textContent = Number(userMoney.textContent) + Number(betAmount.value);
};

function applyResult(isWin) {
    const bet = Number(betAmount.value);
    if (isWin) {
        showWin();
        updateMoney(bet);
    } else {
        showLoss();
        updateMoney(-1 * bet);
    }
};
function generateRandom() {
    let random = Math.random();
    output.textContent = random;
    return random;
};

buttonHigh.addEventListener('click', () => {
    let random = generateRandom();
    applyResult(random >= .5);
});

buttonLow.addEventListener('click', () => {
    let random = generateRandom();
    applyResult(random < .5);
});


