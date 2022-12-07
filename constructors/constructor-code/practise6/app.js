class Person {
  constructor(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstname} ${this.lastname}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastname = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('James', 'Williams', '09-22-1984');

mary.getsMarried('Thompson')
console.log(mary);
console.log(Person.addNumbers(3,5))