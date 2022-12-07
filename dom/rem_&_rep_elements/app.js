// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// console.log(oldHeading);

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// const newSpan = document.createElement('span');
// newSpan.className = 'card-title';
// newSpan.appendChild(document.createTextNode('Task List App'));

// const oldSpan = document.querySelector('span.card-title');

// const cardContent = document.querySelector('div.card-content');
// console.log(oldSpan);
// cardContent.replaceChild('newSpan', 'oldSpan');
// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
// lis[0].remove();

// Remove child element
// list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
// console.log(link);

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.setAttribute('href', 'http://google.com');
val = link.getAttribute('href');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link.hasAttribute('title');
val = link;

console.log(val);

