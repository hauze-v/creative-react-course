/* Objects and Arrays pass by reference */
const initialUsers = ["john", "traversy", "ed"];

// const currentUsers = initialUsers;

// currentUsers.push("Florin Pop", "Net Ninja");

// console.log(currentUsers); // contains new
console.log(initialUsers); // also contains new (the same)

/* Numbers, Strings, and Booleans pass by value */

/* To copy over, we use the ...spread operator instead */
const finalUsers = [...initialUsers, "Florin Pop", "Net Ninja"];
console.log(finalUsers);