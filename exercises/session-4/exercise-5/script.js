const element = document.querySelector('ul');
const father = element.parentElement;
father.style = 'border: 2px solid red';
const child = element.children;
Array.from(child).forEach(cur =>
    cur.style = 'border: 2px solid blue');
const sons = father.children;
Array.from(sons).forEach(cur =>
    cur.style = 'border: 2px solid green');


