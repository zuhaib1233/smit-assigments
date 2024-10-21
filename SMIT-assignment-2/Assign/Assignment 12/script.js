// ........................................................
/*
let number = +prompt("Enter number!");
document.write(`Number: ${num} <br>`);
document.write(`Roundoff: ${Math.round(number)} <br>`);
document.write(`Ceil: ${Math.ceil(number)} <br>`);
document.write(`Floor: ${Math.floor(number)} <br>`);
*/

// ......................... ...............................
/*
let number = +prompt("Enter number!");
document.write(`Number: ${number} <br>`);
document.write(`Roundoff: ${Math.round(number)} <br>`);
document.write(`Ceil: ${Math.ceil(numeber)} <br>`);
document.write(`Floor: ${Math.floor(number)} <br>`);
*/

// ......................... ...............................
/*
let num = +prompt("Enter number!");
document.write(Math.abs(num));
*/

// ........................................................
/*
let num = Math.ceil(Math.random() * 6);
document.write(num);
*/

// ........................................................
/*
let num = Math.ceil(Math.random() * 2);
if(num == 1) {
    document.write("Heads");
}
else {
    document.write("Tails");
}
*/

// ........................................................
/*
let num = Math.ceil(Math.random() * 100);
document.write(num);
*/

// ........................................................
/*
let str = prompt("Enter your weight!");
let str2 = "";

for(let i=0; i<str.length; i++) {
    if(str[i] >= '0' && str[i] <= '9' || str[i] == '.') {
        str2 += str[i];
    }
    else {
        break;
    }
}

let num = Number(str2);
document.write(`Your weight is: ${num}`);
*/

/*
let str = prompt("Enter your weight!");
let num = parseFloat(str);

if(!isNaN(num))
    document.write(`Your weight is: ${num}`);
else
    document.write(`Invalid input`);
*/

// ........................................................
/*
let num1 = Math.ceil(Math.random() * 10);
let num2 = +prompt("Input number between 1 and 10!");

if(num1 == num2) {
    document.write(`You matches secret number!`);
}
else {
    document.write(`Try again!`);
}
*/