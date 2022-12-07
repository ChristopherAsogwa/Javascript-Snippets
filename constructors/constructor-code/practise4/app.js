// Person constructor 
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
 
// greeting
Person.prototype.greeting = function() {
  return `Hello there, ${this.firstname} ${this.lastname}`;
}

const james =  new Person('James', 'Mark');

console.log(james.greeting());

// Customer constructor
function Customer (firstname, lastname, phone, membership) {
  // Inherit properties from Person Constructor
  Person.call(this, firstname, lastname);

  this.phone = phone;
  this.membership = membership;
}

// inherit Person methods
Customer.prototype = Object.create(Person.prototype);

// Make the Costumer prototype return customer 
Customer.prototype.constructor = Customer;

const chris = new Customer('chris', 'tim', '07063510407', 'regular');

// update the greeting funtion 
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstname} ${this.lastname}, welcome to our company`;
}


console.log(chris.greeting());
console.log(chris);

