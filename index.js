let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

let a = 12;
let b = "13";
console.log(a + b);
console.log(typeof (a + b));

let x = 10;
let y = 20;
console.log(x + y + "is sum of 10 and 20");

// Type Coercion
console.log("1" + 1);
console.log("1" - 1);
console.log("1" * 1);
console.log("1" / 1);
console.log("1" % 1);

// Accepting input from user
// Type Casting
let age = Number(prompt("Enter your age"));
console.log(age);
console.log(typeof age);

// Swap 2 variables via 3 methods

// Method 1
let v1 = 1;
let v2 = 2;
let v3 = v1;
v1 = v2;
v2 = v3;
console.log(v1, v2);

// Method 2
let var1 = 10;
let var2 = 20;
var1 = var1 + var2; // var1 = 30
var2 = var1 - var2; // var2 = 10
var1 = var1 - var2; // var1 = 20
console.log(var1, var2);

// Method 3
let variable1 = 100;
let variable2 = 200;
[variable1, variable2] = [variable2, variable1];
console.log(variable1, variable2);