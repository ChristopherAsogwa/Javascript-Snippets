//Constructors lesson 1

//Person constructor 
function Person(name, dob) {
  this.name = name;

  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const chris = new Person('Chris', '10-22-1996'); 
console.log(chris.calculateAge());