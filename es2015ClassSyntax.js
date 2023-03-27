// A class is a blueprint for creating objects with pre-defined properties and methods.
// We create a mould that we then pass in data too.
// Definig the class is just the pattern. We will need to create the data using new and call methods on it.
// this. keyword inside of a constructor refers to the individual instance of the class
// We never call the constructor, the constructor method will be exected when we instantiate a new student.

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
  }
  // here we are defing a method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
}

// We need to instantiate using instances of this class
new Student('Katie', 'Rey', '3')

// {
//   "firstName": "Katie",
//   "lastName": "Rey"
//   "grade": "3"
// }

// Create a variable
let katie = new Student('Katie', 'Rey', '3')

// We can then access properties on the variable object:
katie.firstName = 'Catie'

// {
//   "firstName": "Catie",
//   "lastName": "Rey"
//   "grade": "3"
// }

// Instance methods

// Pertains functionally on a single instance (in this case student)
//  We can create new methods that correspond to individual instances not the class level

// Calling the method in the instance
katie.fullName()
