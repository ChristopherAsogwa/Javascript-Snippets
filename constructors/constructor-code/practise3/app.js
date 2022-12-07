// Object Prototype
// Person.prototype 

// Person Constructor
function Person(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthday = new Date(dob);

  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Prototype 
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
  return `${this.firstname} ${this.lastname}`;
}

Person.prototype.getsMarried = function(newLastName) {
  this.lastname = newLastName;
}
// initialize
const brad = new Person('brad', 'traversy', '10-23-1981');
const mary = new Person('mary', 'williams');


console.log(mary.getFullName());
mary.getsMarried('Asogwa');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstname'));