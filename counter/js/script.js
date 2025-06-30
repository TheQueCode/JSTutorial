// Counter program

const container = document.querySelector('.container');

const label = document.createElement('label');
label.id = 'countLabel';
label.textContent = 0;

const buttonSection = document.createElement('div');
buttonSection.id = 'buttonSection';

const decreaseBtn = document.createElement('button');
decreaseBtn.addEventListener('click', decrease);
decreaseBtn.id = 'decreaseBtn';
decreaseBtn.textContent = 'Decrease';

const resetBtn = document.createElement('button');
resetBtn.addEventListener('click', reset);
resetBtn.id = 'resetBtn';
resetBtn.textContent = 'Reset';

const increaseBtn = document.createElement('button');
increaseBtn.addEventListener('click', increase);
increaseBtn.id = 'increaseBtn';
increaseBtn.textContent = 'Increase';

container.appendChild(label);
container.appendChild(buttonSection);
buttonSection.appendChild(decreaseBtn);
buttonSection.appendChild(increaseBtn);
buttonSection.appendChild(resetBtn);

let count = 0;

function increase () {
  count++;
  label.textContent = count;
}

function decrease () {
  count--;
  label.textContent = count;
}

function reset () {
  count = 0;
  label.textContent = count;
}