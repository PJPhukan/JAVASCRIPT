let numberResult = 42;
let stringResult = "Hello, world!";
let booleanResult = true;
let nullResult = null;
let undefinedResult = undefined;
let symbolResult = Symbol("unique");
let bigIntResult = 1234567890123456789012345678901234567890n;

console.log("numberResult:", typeof numberResult); //  number
console.log("stringResult:", typeof stringResult); //  string
console.log("booleanResult:", typeof booleanResult); //  boolean
console.log("nullResult:", typeof nullResult); //  object (this is a known quirk in JavaScript)
console.log("undefinedResult:", typeof undefinedResult); //  undefined
console.log("symbolResult:", typeof symbolResult); //  symbol
console.log("bigIntResult:", typeof bigIntResult); //  bigint

let objectResult = { name: "John", age: 30 };
let arrayResult = [1, 2, 3, 4, 5];
let functionResult = function () {
  console.log("Hello world");
};

console.log("objectResult:", typeof objectResult); //  object
console.log("arrayResult:", typeof arrayResult); //  object (arrays are a type of object in JavaScript)
console.log("functionResult:", typeof functionResult); //  function (functions are also a type of object in JavaScript)
