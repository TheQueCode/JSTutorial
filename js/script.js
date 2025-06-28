const container = document.querySelector('.container');

const title = document.createElement('div');
title.className = 'title';
title.textContent = 'This is my title!';

const para = document.createElement('p');
para.className = 'para';
para.textContent = 'This is my paragraph.'

title.appendChild(para);
container.appendChild(title);