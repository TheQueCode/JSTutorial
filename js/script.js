/*
const container = document.querySelector('.container');

const title = document.createElement('div');
title.className = 'title';
title.textContent = 'This is my title!';

const para = document.createElement('p');
para.className = 'para';
para.textContent = 'This is my paragraph.'

title.appendChild(para);
container.appendChild(title);

let fullName = 'Que Code';
let age = 50;
let student = true;

document.querySelector('#p1').textContent = `My name is: ${fullName}`;
document.querySelector('#p2').textContent = `My age is: ${age}`;
document.querySelector('#p3').textContent = `I am a student? ${student}`;

let students = 30;

students++;
students += 1;
students--;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

console.log(students);


// Accept user input

// easy way = window prompt
// professional way = HTML textbox

let userName;

userName = window.prompt('What is your user name?');

console.log(userName);

const container = document.querySelector('.container');

const label = document.createElement('label');
label.textContent = 'username: '
label.id = 'username';

const input = document.createElement('input');
input.className = 'userInput';
input.id = 'userInput';
input.label = 'userInput';

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.className = 'submit';
submitBtn.id = 'submit';

container.appendChild(label);
container.appendChild(input);
container.appendChild(submitBtn);

submitBtn.addEventListener('click', () => console.log(input.value));

let x = 'pizza';
let y = 'pizza';
let z = 'pizza';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN 'number'
console.log(y, typeof y); // pizza string
console.log(z, typeof z); // true 'boolean'

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
*/
// Math object



