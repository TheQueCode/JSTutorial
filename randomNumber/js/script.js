// random number generator
const luckyNumbers = [1,2,3];

const container = document.querySelector('.container');

const rollBtn = document.createElement('button');
rollBtn.addEventListener('click', generateNumbers);
rollBtn.className = 'rollBtn';
rollBtn.textContent = 'Roll';

const luckyLabel = document.createElement('label');
luckyLabel.textContent = 'Lucky for Life: ';
luckyLabel.className = 'luckyForLife';
const luckyNumsDisplay = document.createElement('div');
luckyNumsDisplay.className = 'luckyNums';

const powerLabel = document.createElement('label');
powerLabel.textContent = 'PowerBall: '
powerLabel.className = 'powerBall';
const powerNumsDisplay = document.createElement('div');
powerNumsDisplay.className = 'powerNums';

const megaLabel = document.createElement('label');
megaLabel.textContent = 'Mega Millions: ';
megaLabel.className = 'megaMillions';
const megaNumsDisplay = document.createElement('div');
megaNumsDisplay.className = 'megaNums';


container.appendChild(rollBtn);

container.appendChild(luckyLabel);
luckyLabel.appendChild(luckyNumsDisplay);

container.appendChild(powerLabel);
powerLabel.appendChild(powerNumsDisplay);

container.appendChild(megaLabel);
megaLabel.appendChild(megaNumsDisplay);

// Lucky for Life
// 5 balls(1 to 48)
// Lucky Ball(1 to 18)

function getUniqueNumbers (count, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(numbers);
}

function luckyTimes () {
  const mainNumbers = getUniqueNumbers(5, 48);
  const luckyBall = Math.floor(Math.random() * 18) + 1;
  return [...mainNumbers, luckyBall];
};

// Powerball
// 5 balls(1 to 69)
// Powerball(1 to 26)

function powerBallTimes () {
  const mainNumbers = getUniqueNumbers(5, 69);
  const powerBall = Math.floor(Math.random() * 26) + 1;
  return [...mainNumbers, powerBall];
};

// Mega Millions
// 5 balls(1 to 70)
// Mega Ball(1 to 24)

function megaTimes () {
  const mainNumbers = getUniqueNumbers(5, 70);
  const megaBall = Math.floor(Math.random() * 24) + 1;
  return [...mainNumbers, megaBall];
};

function displayNumbers(container, numbers) {
  container.innerHTML = '';
  numbers.forEach((num, index) => {
    const span = document.createElement('span');
    span.textContent = num;
    
    if (index === numbers.length - 1) {
      span.classList.add('specialBall'); // Last ball gets special style
    }

    container.appendChild(span);

    // Add comma after all except the last number
    if (index !== numbers.length - 1) {
      container.appendChild(document.createTextNode(', '));
    }
  });
}

function generateNumbers () {
  displayNumbers(luckyNumsDisplay, luckyTimes());
  displayNumbers(powerNumsDisplay, powerBallTimes());
  displayNumbers(megaNumsDisplay, megaTimes());
}