// string 
const name1 = 'chris';
const name2 = new String('chris');

// if(name2 === 'chris'){
//   console.log('YES');
// }else{
//   console.log('No');
// }

//Number 
const num1 = 2;
const num2 = new Number(2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true); 

// Function
const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x','y', `return x + y`);

//Object1
const john1 = {name: 'john1'};
const john2 = new Object({name: 'john2'}); 


//Arrays
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re2);