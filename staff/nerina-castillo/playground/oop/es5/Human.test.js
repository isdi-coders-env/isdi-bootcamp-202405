var Human = require("./Human");
var Animal = require("./Animal");

var frank = new Human("1991-11-16", "Frank", "Pereira", "male");

console.log(frank);
console.log(frank.complain());
console.log(frank.eat("🥪"));
console.log(frank.poo());
console.log(frank.add(1, 2));
console.log(frank.read("hola mundo"));
console.log(frank instanceof Human);
console.log(frank instanceof Animal);
console.log(frank instanceof Object);
console.log(frank instanceof Array);
console.log(frank.toString());