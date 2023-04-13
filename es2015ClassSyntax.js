// Javascript's syntactic sugar to look like OOP (object oriented programming)


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
    this.late = 0
    this.scores = []
  }
  // here we are defing a method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.late += 1
    if (this.late >= 3) {
      return 'You are expelled!!'
    }
    return `${this.firstName} ${this.lastName} has been late ${this.late} times`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  static enrollStudents() {
    return 'Enrolling students!'
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
// We can create new methods that correspond to individual instances not the class level

// Calling the instance method in the instance (katie)
katie.fullName()

// Executing the markLate instance method
katie.markLateInstance()

katie.late = 1

katie.addScore(34)

////////////////////////////////////////////////////////////////

// Class Methods

// uses the static keyword

// They are not related to a specific instance and connot be called through an instance of the class, instead they are accessed on the class itself
// They are often used to create utility functions for an application (e.g. sending emails to all users)

Student.enrollStudents()

// Example two
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

console.log(Point.distance(p1, p2)) // 7.0710678118654755

// Recap

//  The this. keyword behaves a bit different than normal.
//  Inside of any instance method or the constructor, the keyword this. refers to the object created from that class, also know as the instance,

// Classes are blueprints that, when created, make objects known as instances.

// Classes are created or instantiated with the new keyword.

// The constructor function is a special function that gets run when the class is instantiated.

// When you run new student, the student constructor is run.

// Instance methods can be added to classes similar to methods and objects, and class methods can be added with a static keyword.
