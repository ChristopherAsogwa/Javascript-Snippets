const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name + " is " + people[i].age + " years old.");
}

const dog = {
  name: "bullet",
  age: "4",
  color: "army colour",
  food: "Indomie",
  skills: ['barking', 'running', 'attack'],
  species: {
    mom: "german shephard",
    dad: "roit wyler"
  },
  weight: function weight(){
    return 78 - this.age;
  }
}

let value;
value = dog.name;
value = dog.age + " years old.";
console.log(value);