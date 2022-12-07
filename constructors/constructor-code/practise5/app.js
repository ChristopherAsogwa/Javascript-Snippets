const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstname} ${this.lastname}`;
  },
  getsMarried: function(newLastName) {
    this.lastname = newLastName;
  }
}

const mary = Object.create(personPrototypes);

mary.firstname = 'mary';
mary.lastname = 'johnson';
mary.age = 29;

mary.getsMarried('Clay');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstname: {value: 'Brad'},
  lastname: {value: 'traversy'},
  age: {value: 36}
});

console.log(brad.greeting());

