"use strict";
// Function Signatures (optional)
// calculate is a --function-- defined b ()
// After arrow  number is the --return type--
let calculate;
let animals = [];
animals.push("Cat", "RAT");
animals.push("DOG");
console.log(animals);
// Declaring Function
// We can declare function without signature but type declaration for params
calculate = (num1, num2) => {
    return num1 + num2;
};
console.log(calculate(5, 10));
