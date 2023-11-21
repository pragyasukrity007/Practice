/*

Object: An Object is a unique entity that contains properties and methods. For example “a car” 
is a real-life Object, which has some characteristics like color, type, model, and horsepower 
and performs certain actions like driving. The characteristics of an Object are called Properties 
in Object-Oriented Programming and the actions are called methods. An Object is an instance of 
a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is 
a function, array, or string. 

Note: A Method in javascript is a property of an object whose value is a function. 

The object can be created in two ways in JavaScript:
1. Object Literal
2. Object Constructor

---------------------------------------------------------------------------------------------------

Classes: Classes are blueprints of an Object. A class can have many Objects because the class 
is a template while Objects are instances of the class or the concrete implementation. 

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over 
JavaScript’s existing prototype-based inheritance. The class syntax is not introducing a 
new object-oriented inheritance model to JavaScript. JavaScript classes provide a much 
simpler and clearer syntax to create objects and deal with inheritance. 

---------------------------------------------------------------------------------------------------

Abstraction: Abstraction means displaying only essential information and hiding the details. 
Data abstraction refers to providing only essential information about the data to the outside 
world, hiding the background details or implementation. 

Encapsulation: The process of wrapping properties and functions within a single unit is known 
as encapsulation. 

Inheritance: It is a concept in which some properties and methods of an Object are being 
used by another Object. Unlike most of the OOP languages where classes inherit classes, 
JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object 
can be reused by other Objects.

Polymorphism: Polymorphism is one of the core concepts of object-oriented programming languages. 
Polymorphism means the same function with different signatures is called many times. 
In real life, for example, a boy at the same time may be a student, a class monitor, etc. 
So a boy can perform different operations at the same time. Polymorphism can be achieved by 
method overriding and method overloading.
*/

// Encapsulation example
class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},
      Address is: ${this.add}`);
  }
}

let person1 = new Person("Mukul", 21);
person1.add_Address("Delhi");
person1.getDetails();

/*
Output: In this example, we simply create a 'Person' Object using the constructor, Initialize 
its properties and use its functions. We are not bothered by the implementation details. 
We are working with an Object’s interface without considering the implementation details. 

Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing 
essential features hiding the background detail. Most of the OOP languages provide access 
modifiers to restrict the scope of a variable, but there are no such access modifiers in 
JavaScript, there are certain ways by which we can restrict the scope of variables within 
the Class/Object. 
*/

// Abstraction example
function Person1(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function () {
    return `First name is: ${firstname} Last 
			name is: ${lastname}`;
  };

  this.getDetails_access = function () {
    return `First name is: ${firstname}, Last 
			name is: ${lastname}`;
  };
}
let person2 = new Person1("Mukul", "Latiyan");
console.log(person2.firstname);
console.log(person2.getDetails_noaccess);
console.log(person2.getDetails_access());

/*
In this example, we try to access some property(person1.firstname) and 
functions(person1.getDetails_noaccess) but it returns undefined while there is a method 
that we can access from the person object(person1.getDetails_access()). By changing the 
way we define a function we can restrict its scope.
*/

// Inheritance example
class Person2 {
  constructor(name) {
    this.name = name;
  }
  // method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}

class student extends Person2 {
  constructor(name, id) {
    // super keyword for calling the above
    // class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()},
		Student ID: ${this.id}`;
  }
}

let student1 = new student("Mukul", 22);
console.log(student1.toString());

/*
Output: In this example, we define a Person Object with certain properties and methods and 
then we inherit the Person Object in the Student Object and use all the properties and methods
of the person Object as well as define certain properties and methods for the Student Object.

Note: The Person and Student objects both have the same method (i.e toString()), 
this is called Method Overriding. Method Overriding allows a method in a child class 
to have the same name(polymorphism) and method signature as that of a parent class. 

In the above code, the super keyword is used to refer to the immediate parent class’s 
instance variable. 
*/

// an example of using OOPS
class CD {
  constructor(param1, fn, a, b, fn1) {
    this.name = param1;
    this.a = a;
    this.b = b;
    this.add = fn;
    this.thisAdd = fn1;
  }
  greet() {
    return `hello ${this.name}`;
  }
}

function sum(a, b) {
  return a + b;
}

function thisSum() {
  return this.a + this.b;
}
const obj = new CD("Mike", sum, 5, 6, thisSum);
console.log(obj.greet());
console.log(obj.add(1, 2));
console.log(obj.thisAdd());
