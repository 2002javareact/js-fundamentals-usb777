/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

class MyObject{
 constructor (name, age)
{
    this.name = name
    this.age = age
}


}

var myObject = new MyObject("John", 24) 
var myObject1 = new MyObject("Andrew",40) 

console.log(`name: ${myObject.name}, age: ${myObject.age}  `);

console.log(`name: ${myObject1.name}, age: ${myObject1.age}  `);






