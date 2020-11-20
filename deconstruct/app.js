const user = {
  name: "Adam",
  lastName: "Savage",
  age: 36
};

/* Deconstruct the object */
const {name, lastName, age} = user;
console.log(name); // don't need to do "user.name" or "user.age"

/* Works same with arrays */
const numbers = [1,2,3,4,5];
const [first, second, third, fourth, fifth] = numbers;
console.log(`${first} ${second}`); 