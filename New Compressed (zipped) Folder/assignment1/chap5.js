//1
var n1 = 14, n2 = 6, res
res = n1 + n2
document.write("Sum of "+ n1 + " and " + n2 + " is "+ res)

//2
res = n1 - n2
document.write("<br><br>Subtraction of "+ n1 + " and " + n2 + " is "+ res)
res = n1 * n2
document.write("<br>Multiplication of "+ n1 + " and " + n2 + " is "+ res)
res = n1 / n2
document.write("<br>Division of "+ n1 + " and " + n2 + " is "+ res)
res = n1 % n2
document.write("<br>Modulus of "+ n1 + " and " + n2 + " is "+ res)

//3
var num
document.write("<br><br>Value after variable declaration is " + num)
num = 5
document.write("<br>Initiall Value : "+ num)
num++
document.write("<br>Value after increment is : "+ num)
num = num + 7
document.write("<br>Value after addition is : " + num)
num --
document.write("<br>Value after decrement is : "+ num)
num = num % 3
document.write("<br>The remainder is : "+ num)

//4
var cost = 600, quan = 5, total
total = cost * quan
document.write("<br><br>Total cost to buy "+ quan + " movie tickets is "+ total + "PKR")

//5
var table = 4, num = 1
document.write("<br><br>Table of "+ table)
document.write("<br>" + table + " x " + num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)
document.write("<br>" + table + " x " + ++num + " = " + table * num)

//6
var temp_C = 25
temp_F = (temp_C * (9 / 5)) + 32
document.write("<br><br>" + temp_C + "&deg;C is " + temp_F +"&deg;F")
temp_F = 70
temp_C = (temp_F - 32) * 5/9
document.write("<br>" + temp_F + "&deg;F is " + temp_C +"&deg;C")