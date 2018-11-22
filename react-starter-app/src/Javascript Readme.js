//////////////////////////////////////////////////////////////////////

// Javascript Arrow functions meaning:::

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
}); //is same as:
const activeJobs = jobs.filter(job => job.isActive); //which is modern ES6 arrow function syntax.

////////////////////////////////////////////////////////////////////////

// Example of map function using arrow function:::
const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

//////////////////////////////////////////////////////////////////////

// Object Destructuring Description:::
const address = {
  street: "",
  city: "",
  country: ""
};
// Below is long and avoid it!
const street = address.street;
const city = address.city;
const country = address.country;
// Above is the same as below!!! BUT Below is CORRECT and Destructured!!
const { street, city, country } = address;

////////////////////////////////////////////////////////////////////////

//Spread Operator Description:::

const first = [1, 2, 3];
const second = [4, 5, 6];
// Below only spreads the two above
const combined = first.concat(second);
// Below is new way, because its more versatile - can add other items between.
const combined = [...first, "a", ...second, "b"];

////////////////////////////////////////////////////////////////////////

// Class Examples::

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
} // And then call this class below::
const person = new Person("Kirby");

////////////////////////////////////////////////////////////////////////

// Inheritance Example:::

// If we want teacher class to inherit from person we'd put:
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach", "Master of Science");
  }
}

////////////////////////////////////////////////////////////////////////

// Modules Example::

// Make a new file for the Above Person class named person.js and same for teacher.js
// In order to make these classes in their own files visible type: 
export class Teacher extends Person {
// In teacher.js you would put :
import { person } from './person';
// In index.js you would import teacher and make your calls in index.js
