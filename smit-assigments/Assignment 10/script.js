// .......................... Question No 01 ..........................
/*
let rows = +prompt("Enter number of rows in multiArray !");
let cols = +prompt("Enter number of cols in multiArray !");

let multiArray = new Array(rows);

for(let i=0; i<rows; i++) {
    multiArray[i] = new Array(cols);
}

for(let i=0; i<rows; i++) {
    for(let j=0; j<cols; j++) {
        console.log(multiArray[i][j]);
    }
    console.log("\n");
}
*/

// .......................... Question No 02 ..........................
/*
let multiArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for(let i=0; i<3; i++) {
    for(let j=0; j<4; j++) {
        console.log(multiArray[i][j]);
    }
    console.log("\n");
}
*/

// .......................... Question No 03 ..........................
/*
for(let i=0; i<10; i++) {
    console.log(i+1);
}
*/

// .......................... Question No 04 ..........................
/*
let num = +prompt("Enter anumber to show its multiplication table");
let length = +prompt("Enter length of multiplication table");

console.log(`Multiplication table of ${num}`);
console.log(`Length ${length}`);

for(let i=1; i<=length; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
}
*/

// .......................... Question No 05 ..........................
/*
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

for(let i=0; i<fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`);
}
*/

// .......................... Question No 06 ..........................
/*
console.log("Counting :");
for(let i=1; i<=15; i++) {
    console.log(i);
}

console.log("\nReverse counting :");
for(let i=10; i>=1; i--) {
    console.log(i);
}

console.log("\nEven :");
for(let i=0; i<=20; i++) {
    if(i % 2 == 0)
        console.log(i);
}

console.log("\nOdd :");
for(let i=0; i<=20; i++) {
    if(i % 2 != 0)
        console.log(i);
}

console.log("\nSeries :");
for(let i=2; i<=20; i++) {
    if(i % 2 == 0)
        console.log(`${i}K`);
}
*/

// .......................... Question No 07 ..........................
/*
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let item = prompt("Welcome to ABC Bakery. What you want to order Sir/Ma'am ?").toLowerCase();

let index = A.indexOf(item);
if(index != -1) {
    console.log(`${item} is present at index ${index}`);
}
else {
    console.log(`${item} is not present in an array`);
}
*/

// .......................... Question No 08 ..........................
/*
let array = [24, 19, 5, 3, 100, 54, 63, 87, 12, 76, 34, 76, 99, 101, 2, 1, 5, 76, 101];
let max = array[0];

for(let i=0; i<array.length; i++) {
    if(array[i] > max) {
        max = array[i];
    }
}

console.log(`Maximum element is ${max}`);
*/

// .......................... Question No 09 ..........................
/*
let array = [24, 19, 5, 3, 100, 54, 63, 87, 12, 76, 34, 76, 99, 101, 2, 1, 5, 76, 101];
let min = array[0];

for(let i=0; i<array.length; i++) {
    if(array[i] < min) {
        min = array[i];
    }
}

console.log(`Minimum element is ${min}`);
*/

// .......................... Question No 10 ..........................
/*
for(let i=1; i<=100; i++) {
    if(i % 5 == 0) {
        console.log(i);
    }
}
*/