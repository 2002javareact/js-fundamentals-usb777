/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// object literal
var myObjectLiteral = {
    name: 'Mr. Dzen',
    age: 22
};

// constructor function
function myObjectConstructorFunction(name, age) 
{
    this.name = name;   
    this.age = age;
   
  }

// es6 class
class MyObject{
 constructor (name, age)
{
    this.name = name
    this.age = age
}


} // class end

var myObject = new MyObject("John", 24) 

// Create a Person object
var myobjectfromconstructor = new myObjectConstructorFunction("Mathew",  50);

console.log(`name: ${myObjectLiteral.name}, age: ${myObjectLiteral.age}  `);
console.log(`name: ${myobjectfromconstructor.name}, age: ${myobjectfromconstructor.age}  `);
console.log(`name: ${myObject.name}, age: ${myObject.age}  `);








