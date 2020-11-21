const users = [
  { name: "Adam", age: 26 },
  { name: "Led Zeppelin", age:30 },
  { name: "Black Sabath", age: 39 }
];

/* Map array method copies each object in users array */
const modifiedUser = users.map(user => {
  return user
})

console.log(modifiedUser);

/* Filter array method (filters the array object and returns based on condition) */
const filterUser = users.filter((user) => {
  return user.age === 30;
})

console.log(filterUser);