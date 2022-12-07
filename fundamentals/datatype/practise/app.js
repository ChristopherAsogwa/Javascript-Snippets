// Primitive DataTypes 

// String 
const name = 'John Doe';

// Number 
const age = 45;

// Boolean
const hasKids = true;

// Null
const car = null;

// Undefined 
let test;

// Symbol
const sym = Symbol(); 

// Check Datatypes(Primitive) 
// console.log(typeof sym);


// Reference Data Types (Objects)
// Array
const hobbies = ['movies', 'music'];

// Object Literals
const address = {
  city: 'Boston',
  state: 'MA'
}

//Date 
const today = new Date();
// console.log(today);

// Check DataType(Reference Data Types)
// console.log(typeof today);


// Proofing the fact that JS is dynamically typed 
// Using the variable 'g' to modify different datatype values

let g = 'falz';
g = 43;
g = 53.82;
g = true; 
g = null;
console.log(g);
console.log(typeof g);