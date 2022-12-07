// const sayHello = function() {
//   console.log('hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// };

// One line function does not need braces 
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above 
// const sayHello = function() {
//   return 'Hello';
// };

// Return Object 
// const sayHello = () => ({msg: 'Hello'});

// Single Params does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`); 

// Multiple Params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('James', 'Thompson');

const users = ['Nathan', 'James', 'William'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest 
const nameLengths = users.map(name => name.length);

console.log(nameLengths);