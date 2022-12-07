// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Append li to ul 
document.querySelector('ul.collection').appendChild(li);

// Create link and append 
const link = document.createElement('a');
// add a class
link.className = "delete-item secondary-content";
// add i tag, inner html
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

// Create new link element
// const link = document.createElement('a');
// Add classes
// link.className = 'delete-item secondary-content';
// link.setAttribute('href', 'https://www.facebook.com');
// link.setAttribute('target', '_blank');
// Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
// li.appendChild(link);

// Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// const newLi = document.createElement('li');

// newLi.className = 'collection-item';
// newLi.id = 'item-new';
// newLi.setAttribute('title', 'Item New');
// newLi.appendChild(document.createTextNode('Hello Ubuntu_lite'));

// const newLink = document.createElement('a');
// newLink.className = 'delete-item secondary-content';
// newLink.setAttribute('href','https://www.instagram.com');
// newLink.setAttribute('target', '_blank');
// newLink.innerHtml = '<i class="fa fa-remove"></i>';

// newLi.appendChild(newLink);

// document.querySelector('ul.collection').appendChild(newLi);
// console.log(document.querySelector('ul.collection'));

console.log(li);