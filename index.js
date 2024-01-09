// Objects in JS

// JS object is a non-primitive data type that allows you to store multiple colllections of data.

// Objects are a collection of key-value pairs.

/* Syntax:-- 
const object_name = {
  key1: "value1",
  key2: "value2"
}*/

const person = {
  name: "John",
  age: 30,
  city: "New York",
  // nested object
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "78725"
  }
}

// console.log(person); <-- example

/* Access the OBJ propertie using dot notation

console.log(person.name); */

/* Access the OBJ propertie using bracket notation

console.log(person["age"]); */

/* updation of the OBJ propertie

person.name = "Elon";

console.log(person.name); */
/* Add a new property to the OBJ

person.country = "USA";

console.log(person) */

/* Delete a property from the OBJ

delete person.age;

console.log(person); */

/* nessted objects ex.

// console.log(person.address);

console.log(person.address.city); */

/* check if a property exists in the OBJ

console.log("name" in person);

console.log("country" in person); */

/* the for..in loop allows you to access each property and value of an OBJ without knowing the specific property names.

for(let prop in person){
  console.log(prop + ": " + person[prop]);
} */

// Create OBJ with new keyword
const person1 = new Object({
  name: "John",
  age: 30,
  city: "New York"
});
console.log(person1);