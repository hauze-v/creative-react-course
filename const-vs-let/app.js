/* var is globally scoped or function scoped */
var user = {
  name: "Adam H"
};

for (var i = 0; i < 10; i++) {
  console.log(i);
}

/* we can access it here */
console.log(`i is: ${i}`)

function sayHello() {
  var name = "Edwin";
  console.log(name);
}

console.log(name); // errors out

/* let and const are blocked (bracket) scoped
   And const cannot be re-assigned. It's a "constant" (similar to final in Java) */


