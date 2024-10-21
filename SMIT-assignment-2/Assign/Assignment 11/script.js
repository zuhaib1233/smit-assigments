// .............................. Q1 ............................
/*
let firstname = prompt("Enter your first name!");
let lastname = prompt("Enter your last name!");

let fullName = firstname + lastname;
alert(`Welcome ${fullName}`);
*/

// .............................. Q2 ............................
/*
let mobileName = prompt("Enter your fav mobile model");
document.write("Length of a string : ", mobileName.length);
*/

// .............................. Q3 ............................
/*
let country = "Pakistan";
let index = country.indexOf('n');
document.write(`Index of 'n' : ${index}`);
*/

// .............................. Q4 ............................
/*
let str = "Hello World";
let index = str.lastIndexOf('l');
document.write(`Last index of 'l' : ${index}`);
*/

// .............................. Q5 ............................
/*
let country = "Pakistan";
let eleme = country.charAt(3);
document.write(`Element at index 03 : ${eleme}`);
*/

// .............................. Q6 ............................
/*
let fname = prompt("Enter your first name!");
let lname = prompt("Enter your last name!");

let fullName = fname.concat(lname);
alert(`Welcome! ${fullName}`);
*/

// .............................. Q7 ............................
/*
let str = "Hyderabad";
str = str.replace("Hyder", "Islam");
document.write(`After replacement : ${str}`);
*/

// .............................. Q8 ............................
/*
var message = "zuhaib and jawad are best friends. They play cricket and football together";
message = message.replaceAll("and", "&");
document.write(`After replacement : ${message}`);
*/

// .............................. Q9 ............................
/*
let str = "472";
document.write(`String = ${str}, Type = ${typeof str}`);
let num = Number(str);
document.write(`Number = ${num}, Type = ${typeof num}`);
*/

// .............................. Q10 ............................
/*
let str = prompt("Enter text!").toUpperCase();
document.write(`Uppercase : ${str}`);
*/

// .............................. Q11 ............................
/*
let str = prompt("Enter!");
let arr = str.split(' ');

for(let i=0; i<arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
}

str = arr.join(' ');
console.log(str);
*/

// .............................. Q12 ............................
/*
let num = 35.58;
let str = num.toString();
console.log(`string : ${str}`);
str = str.replace('.', '');
console.log(`string : ${str}`);
*/

// .............................. Q13 ............................
/*
let Name = prompt("Enter your name!");
let symbol = ['@', '.', ',', '!'];

for(let i=0; i<symbol.length; i++) {
    if(Name.indexOf(symbol[i]) != -1) {
        alert("Please enter a valid username!");
        break;
    }
}
*/

// .............................. Q14 ............................
/*
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let item = prompt("Welcome Sir! What you want to order?").toLowerCase();
let index = A.indexOf(item);

if(index != -1) {
    alert(`${item} is available at index ${idnex}`);
}
else {
    alert(`We are sorry! ${item} is not available in our bakery`);
}
*/

// .............................. Q15 ............................
/*
function validation(password) {
    if((password.length < 6) || (password[0] >= 0 && password[0] <= 9)) {
        return 0;
    }
    
    let countNumbers = 0;
    let countAlphabets = 0;

    for(let i=0; i<password.length; i++) {
        if((password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z')) {
            countAlphabets++;
        }
        else if(password[i] >= 0 && password[i] <= 9) {
            countNumbers++;
        }
    }

    if(countNumbers == 0 || countAlphabets == 0) {
        return 0;
    }
    else {
        return 1;
    }
}

let password = prompt("Enter Password!");
let flag = validation(password);

if(flag == 1) {
    document.write(`Entered password : ${password} <br>`);
    document.write("You entered a valid password!");
}
else {
    document.write(`Entered password : ${password} <br>`);
    document.write("You not entered a valid password!");
}
*/

// .............................. Q16 ............................
/*
let uni = "University of Karachi";
let arr = uni.split('');
for(i of arr) {
    document.write(`${i} <br>`);
}
*/

// .............................. Q17 ............................
/*
let input = prompt("User input:");
document.write(input[input.length - 1]);
*/

// .............................. Q18 ............................
/*
let str = "The quick brown fox jumps over the lazy dog";
let arr = str.split(' ');

let count = 0;
for(s of arr) {
    if(s.toLowerCase() == "the") {
        count++;
    }
}

document.write(count);
*/