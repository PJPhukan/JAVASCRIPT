let score = 23;
let scoreString = "23";

// console.log(typeof score);
// console.log(typeof scoreString);
// console.log(score == scoreString); // true, because == checks for value equality and performs type coercion
// console.log(score === scoreString); // false, because === checks for both value and type equality

// Type Coercion
// 1. Implicit Coercion
let num1 = 5; // number
let str1 = "10"; // string
let result1 = num1 + str1; // implicit coercion, number is converted to string
// console.log(result1); // "510"

// 2. Explicit Coercion
let num2 = 5; // number
let str2 = "10"; // string
let result2 = num2 + Number(str2); // explicit coercion, string is converted to number
// console.log(result2); // 15

let roll = 34;
let rollInString = String(roll); // explicit coercion, number is converted to string
// console.log(typeof rollInString); // "string"

let age = "33";
/**
 * "33" => 33
 * "33eaC" => NaN
 * true => 1
 * false => 0
 * Null => 0
 * Undifined=> NaN
 */
let ageInNumber = Number(age);
// console.log(typeof ageInNumber); // "number"

// STRING CONVERSION
// console.log("123" + 1); // "1231"
// console.log(123 + 1); // 124
// console.log(123 + "1"); // "1231"
// console.log(123 + true); // 124
// console.log(123 + false); // 123
// console.log(123 + null); // 123
// console.log("2" + 2 + 1);
// console.log("2" + 2);

//INCREMENT AND DECREMENT
let x = 3;
console.log("x :", x);
x++;
console.log("x :", x++); //4



