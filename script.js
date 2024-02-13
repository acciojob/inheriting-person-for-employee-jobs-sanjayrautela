// Define the Person class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add the greet method to the Person prototype
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
}

// Define the Employee class inheriting from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the constructor of the Person class
  this.jobTitle = jobTitle;
}

// Inherit Person's prototype methods
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
  return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
