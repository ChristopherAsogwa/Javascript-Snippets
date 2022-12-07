// Select a group of items by their classnames and they are list of HTMLCOLLECTIONS which cannot be looped
// document.getElementsByClassName

// Exploring the getElementsByClassName
const items = document.getElementsByClassName('collection-item');
// console.log(items);
// converting the HTMLCOLLECTION to an array
const itemsArr = Array.from(items);
console.log(itemsArr);
// Styling the first list to color, red
// items[0].style.color = 'red';
// items[0].textContent = 'Hello';
// items[0].style.fontSize = '1.5rem';

// Combining the selection of single item, querySelector and selection of multiplt item by className, getElementsByClassName
let listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);
// Convert HTMLCOLLECTION TO NODELIST/ARRAY ???
// listItems = Array.from(listItems);
// console.log(listItems);
// listItems.forEach(function(item, index){
//   console.log(item.className);
//   item.textContent = 'Hello';
// });

// document.getElementsByTagName
// Selecting multiple elements by their tag name 
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// Convert HTML Collection into array
// lis = Array.from(lis);
// console.log(lis);
// lis.reverse();
// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll
// let items = document.querySelectorAll('ul.collection li.collection-item');

// console.log(items);
// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#ddd'; 
};

// List of Selector
// 1. getElementsByClassName
// 2. getElementsById
// 3. getElementsByTagName
// 4. querySelectorAll





// console.log(items);
