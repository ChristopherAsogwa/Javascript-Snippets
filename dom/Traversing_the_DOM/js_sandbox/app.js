// declaring a variable, val
let val;

// declaring and initializing a varible with dom selection, using the query Selector- Selecting the List
const list = document.querySelector('ul.collection');
// Selecting the first List Item
const listItem = document.querySelector('li.collection-item:first-child');


val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[0].children[0].id = 'test-link';
// val = list.children[0].children[0].id;
// val = list.children[3].children[0].id;
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;
// List of the parent Element Children
val = list.children;


// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling.innerText;

listItem.nextElementSibling.nextElementSibling.previousElementSibling.textContent += ' World';
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling.textContent;
// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);