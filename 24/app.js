"use strict";
let car = 'subaru';
let age = 25;
let numbers = [1, 2, 3, 4];
// string test
// Test 1: Equality (True)
console.log("Is car =='subaru'? I predict True.");
console.log(car == 'subaru'); //True (case-insensitive)
//Test 2: strict equality (False)
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); //False (case-sensitive)
// Test 3: Inequality (True)
console.log("Is car !='Toyota'? I predict True.");
console.log(car != 'Toyota'); //True
// Test 4: Inequality (False)
console.log("Is car !=='subaru'? I predict False.");
console.log(car !== 'subaru'); //False (case-sensitive)
//  **Lowercase Funtion Test**
// Test 5: Lowercase conversion (True)
console.log("Is car.tolowercase() == 'subaru'? I predict True.");
console.log(car.toLocaleLowerCase()); // True (convered to lowercase)
// Test 6: Lowercase conversion (False)
console.log("Is car === car.tolowercase()? I predict False.");
console.log(car === car.toLocaleLowerCase()); // False (original value remain uppercase )
// Numerical TEST
// Test 7: Equality (True)
console.log("Is age == 25 I predict True.");
console.log(age != 25); //True
//Test 8: Inequality (False)
console.log("Is age != 30? I predict False.");
console.log(age != 30);
// Test 9: Greater than (False)
console.log("Is age > 30? I predict False");
console.log(age > 30);
// Test 10: Less than or equal (True)
console.log("Is age <= 25 I predict True.");
console.log(age <= 25); //True
//Logical operators
// Test 11: AND (True)
console.log("Is car > 20 && age < 30? I predict True. ");
console.log(age > 20 && age < 30);
// Test 12: OR (False)
console.log("Is car > 30 || age < 18? I predict False. ");
console.log(age > 20 || age < 18);
//Arrays Test 
//Test 13: Include arrays (True)
console.log("Is 3 include in my numbers arrays? I predict True.");
console.log(numbers.includes(3));
// Test 14: Include in arrays (False)
console.log("Is 5 not include in my numbers arrays? I predict False.");
console.log(!numbers.includes(5));
