// This is the code without using a constructor as we have to duplicate the code again and again
const me = {
    talk(){
        return 'Talking';
    }
}
const you = {
    talk(){
        return 'Talking';
    }
}
console.log(me.talk());
console.log(you.talk());



// -----------------------------------------
// Inheritance using the constructor function
class Person {
    talk(){
        return 'Talking with Constructor';
    }
}
const me2 = new Person();
const you2 = new Person();
console.log(me2.talk());
console.log(you2.talk());
console.log(me2) // outputs -> Person {}
// The same code can be repeated for multiple times but this time we would only need to write one line


console.log();
// -----------------------------------------
// We saw that we can't change the function 
// Here comes the prototypal inheritance 
// To update the function for both instances you only have to do it once:
Person.prototype.talk = function () {
    return 'New and improved Talking';
  }; 
  console.log(me2.talk());


  console.log();
// -----------------------------------------
// Inheritance using pure objects using Object.create
const Person3 = {
    talk(){
        return 'Talking as Object';
    }
} 
const me3 = Object.create(Person3);
me3.talk(); // Talking as Object


console.log();
// -----------------------------------------
// Can be simply Explained as properties I have and Things I do

//Properties I have
function Person4(age, name, gender){
    this.age = age;
    this.name = name;
    this.gender = gender;
}

// Things I do
Person4.prototype.run = function(){
    return 'Running';
}
Person4.prototype.walk = function(){
    return 'walking';
}
Person4.prototype.smile = function(){
    return 'Smiling';
}
const mex = new Person4();
mex.run(); // Running
mex.smile(); // Smiling
mex.walk(); // Walking
// mex.age(); // error because we never gave him any property




console.log();
// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf
const person = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me4 = {};
Object.setPrototypeOf(me4, person);
me4.talk(); // Talking



console.log();
// -----------------------------------------
// Extending a Class using 'extends'
class Person5 {
    talk() {
      return 'talking';
    }
  }
  
  class SuperHuman extends Person5 {
    fly() {
      return 'flying';
    }
  }
  const me5 = new Person5();
  console.log(me5.talk); // talk exists
  console.log(me5.fly); // fly does NOT exists
  
  const you5 = new SuperHuman();
  console.log(you5.fly); // fly exists
  console.log(you5.talk); // talk also exists!
