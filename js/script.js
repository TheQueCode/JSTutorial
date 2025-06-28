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