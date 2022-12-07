class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;

  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
  }

  static memberFee() {
    return '$500';
  }
}
const john = new Person('john', 'williams');

console.log(john.greeting());

const chris = new Customer('chris', 'tim', '555-555-5555', 'standard');

console.log(chris.greeting());
console.log(Customer.memberFee());