//1
document.write("1")
var a = 10
document.write("<br>Result:")
document.write("<br>The value of a is: "+ a)
document.write("<br>........................")
document.write("<br><br>The value of ++a is: ", ++a)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>The value of a++ is: ", a++)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>The value of --a is: ", --a)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>The value of a-- is: ", a--)
document.write("<br>Now the value of a is: "+ a)

//2
document.write("<br><br>2")
var a=2, b=1, res
document.write("<br>The values after --a are: <br>a: "+ --a +"<br>b: "+ b)
res = --a - --b
document.write("<br><br>The values after --a - --b are: <br>a: "+ a +"<br>b: "+ b +"<br>Result: "+ res)
res = res + ++b
document.write("<br><br>The values after --a - --b + ++b are: <br>a: "+ a +"<br>b: "+ b +"<br>Result: "+ res)
res = res + b--
document.write("<br><br>The values after --a - --b + ++b + b-- are: <br>a: "+ a +"<br>b: "+ b +"<br>Result: "+ res)

//3
var name = prompt("Enter your name: ")
alert("Welcome "+ name)

//5
var table = prompt("Enter a number: ")
if (table == "")
{
var table = 5, num = 1
document.write("<br><br>5<br>Table of "+ table)
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
}
else if(isNaN(table))
{
    alert("Enter a Number")
}
else 
{
var num = 1
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
}

//6
var sub1 = prompt("Enter name of Subject 1: ")
var marks1 = +prompt("Enter marks of subject 1")
var sub2 = prompt("Enter name of Subject 2: ")
var marks2 = +prompt("Enter marks of subject 2")
var sub3 = prompt("Enter name of Subject 3: ")
var marks3 = +prompt("Enter marks of subject 3")
var tot = 300

document.write("<br><br>6<br>Total Marks: ", tot)
document.write("<br>Obtained Marks: ", marks1+marks2+marks3)
document.write ("<br>Percentage: ", ((marks1+marks2+marks3)*100)/tot)
