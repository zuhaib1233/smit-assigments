// ............................................ Q1 ...........................................................
// let array = []

// ............................................ Q2 ...........................................................
// let array = new Array();

// ............................................ Q3 ...........................................................
// let stringsArray = ["apple", "banana", "cherry", "date"];

// ............................................ Q4 ...........................................................
// let numbersArray = [10, 20, 30, 40];

// ............................................ Q5 ...........................................................
// let booleanArray = [true, false, true, false];

// ............................................ Q6 ...........................................................
// let mixedArray = ["apple", 42, true, null];

// ............................................ Q7 ...........................................................
/*
let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

console.log("Qualifications: \n");
for(let i=0; i<qualification.length; i++) {
    console.log(qualification[i]);
}
*/

// ............................................ Q8 ...........................................................
/*
let names = ["muhaib", "zuhaib", "haris"];
let marks = [490, 499, 492];
let totalMarks = 500;

for(let i=0; i<names.length; i++) {
    console.log(`Score of ${names[i]} is ${marks[i]}. Percentage: ${(marks[i] / totalMarks) * 100}`);
}
*/

// ............................................ Q9 ...........................................................
/*
let colors = ["yellow", "blue", "pink", "orange", "purple"];

// Part (a)
var color = prompt("What color you want to add at the beginnig of an Array?");
colors.unshift(color);
console.log(colors);

// Part (b)
var color = prompt("What color you want to add at the end of an Array?");
colors.push(color);
console.log(colors);

// Part (c)
colors.unshift("black");
colors.unshift("white");
console.log(colors);

// Part (d)
colors.shift();
console.log(colors);

// Part (e)
colors.pop()
console.log(colors);

// Part (f)
var index = prompt("At which index you want to add the color?");
var color = prompt("What color you want to add?");
colors.splice(index, 0, color);
console.log(colors);

// Part(g)
var index = prompt("At which index you want to delete the color?");
var num = prompt("How much color you want to delete?");
colors.splice(index, num);
console.log(colors);
*/

// ............................................ Q10 ...........................................................
/*
let scores = [12, 56, 43, 76, 45, 12, 87, 98, 64, 23, 9, 2];
console.log(`Scores of student: ${scores}`);
let s2 = scores.sort();
console.log(`Ordered Scores of student: ${s2}`);
*/ //Incomplete

// ............................................ Q11 ...........................................................
/*
let cities = ["karachi", "lahore", "multan", "peshawar", "islamabad"];
let selectedCities = [];

for(let i=0; i<3; i++) {
    selectedCities.push(cities[i]);
}

console.log(`Cities: ${cities}`);
console.log(`Selected Cities: ${selectedCities}`);
*/

// ............................................ Q12 ...........................................................
/*
let arr = ["This ", " is ", " my ", " cat"];
let str = arr.join("");
console.log(str);
*/

// ............................................ Q13 ...........................................................
/*
let colors = [];
colors[0] = "blue";
colors[1] = "green";
colors[2] = "yellow";
colors[3] = "black";
colors[4] = "white";
colors[5] = "pink";
colors[6] = "orange";

console.log(`Colors array: ${colors}`);
console.log("FIFO:");
for(let i=0; i<colors.length; i++) {
    console.log(colors[i]);
}
*/

// ............................................ Q14 ...........................................................
/*
let colors = [];
colors[0] = "blue";
colors[1] = "green";
colors[2] = "yellow";
colors[3] = "black";
colors[4] = "white";
colors[5] = "pink";
colors[6] = "orange";

console.log(`Colors array: ${colors}`);
console.log("LIFO:");
for(let i=colors.length-1; i>=0; i--) {
    console.log(colors[i]);
}
*/

// ............................................ Q15 ...........................................................
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the dropdown/select menu
document.write("<label>Choose a phone manufacturer:</label>");
document.write("<select id='manufacturers'>");

// Loop through the manufacturers array and add options to the dropdown
for (let i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}

document.write("</select>")