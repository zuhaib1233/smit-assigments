//1
var city = prompt("Enter your city name: ")
if (city == "Karachi"){
    alert("Welcome to city of lights")
}

//2
var gen = prompt("Enter you gender (Male/Female)")
if (gen == "Male")
{
    alert("Good Morning Sir")
}
if(gen == "Female")
{
    alert("Good Morning Ma'am")
}

//3
var color = prompt("Enter Color(Red/Green/Yellow): ")
if(color == "Red"){
    alert("Must Stop")
}
else if(color == "Green"){
    alert("Move now")
}
else if(color == "Yellow"){
    alert("Ready to move")
}
else{
    alert("Invalid Color")
}

//4
var fuel = +prompt("Enter the fuel of Car in liters: ")
if (fuel < 0.25)
{
    alert("Please refill the fuel in your car")
}

//5
// Part a
var a = 4
if(++a === 5){
    alert("given condition for the variable is true")
}
// Part b
var b = 82
if (b++ === 83) {
    alert("given condition for variable b is true")
}
// Part c
var c = 12
if (c++ === 13) {
    alert("condition 1 is true")
}
if (c === 13) {
    alert("condition 2 is true")
}
if (++c < 14) {
    alert("condition 3 is true")
}
if (c === 14) {
    alert("condition 4 is true")
}
// Part d
var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if (totalCost === laborCost + materialCost) {
    alert("The cost equals")
}
// //part e
if (true) {
    alert("True")
}
if (false) {
    alert("False")
}
//part f
if ("car" < "cat"){
    alert("car is smaller than cat")
}

//6
var marks1 = +prompt("Enter marks of subject 1")
var marks2 = +prompt("Enter marks of subject 2")
var marks3 = +prompt("Enter marks of subject 3")
var tot = +prompt("Enter total marks: ")
var obt = marks1 + marks2 + marks3
var per = obt * 100 / tot
document.write("<br>Total Marks: "+ tot)
document.write("<br>Marks Obtained: "+ obt)
document.write("<br>Percentage: "+ per)
if (per >= 80){
    document.write("<br>Grade: A-one")
    document.write("<br>Remarks: Excellent")
}
else if (per >= 70){
    document.write("<br>Grade: A")
    document.write("<br>Remarks: Good")
}
else if (per >= 60){
    document.write("<br>Grade: B")
    document.write("<br>Remarks: You need to improve")
}
else if (per < 60){
    document.write("<br>Grade: Fail")
    document.write("<br>Remarks: Sorry")
}
else(
    document.write("Invalid Input")
)

//7
var sec_num = 4
var guess_num = +prompt("Guess secret number (1-10): ")
if (sec_num === guess_num){
    alert("Bingo! Correct Answer")
}
else if(--guess_num === sec_num){
    alert("Close enough to the correct answer")
}
else if(guess_num < 11){
    alert("Better luck next time")
}
else{
    alert("Invalid Input")
}

//8
var input = +prompt("Enter a number: ")
if(input % 3 === 0){
    alert("Number is divisible by 3")
}

//9
var odd_or_even = prompt("Enter a number: ")
if(odd_or_even % 2 == 0){
    alert("Entered number is even")
}
else{
    alert("Entered number is odd")
}

//10
var temp = +prompt("Enter Temprature")
if (temp > 40){
    alert("It is too hot outside")
}
else if (temp > 30){
    alert("The weather today is normal")
}
else if (temp > 20){
    alert("Today's weather is cool")
}
else if (temp > 10){
    alert("OMG! Today's weather is so cool")
}
else{
    alert("Invalid Input")
}

//11
var fnum = +prompt("Enter the first number:");
var snum = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = fnum + snum
} else if (operation === "-") {
    result = fnum - snum
} else if (operation === "*") {
    result = fnum * snum
} else if (operation === "/") {
    result = fnum / snum
} else if (operation === "%") {
    result = fnum % snum
} else {
    result = "Invalid operation!";
}
alert("The result is: " + result);
