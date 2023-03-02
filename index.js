
//Easy way to get user input with a prompt window;
//let firstName = window.prompt("What's your name?");

/*Difficult way to get user inputwith HTML textbox;
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("p1").innerHTML = "Hello " + username;
}*/

//Showing something with html id (must be unique)
//document.getElementById("p1").innerHTML = "Hello " + firstName;

/*Converting string to number

let age = window.prompt("Age?");
age = Number(age);
console.log(age + 1);

So just use the constructor
*/

/*Const
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);
*/

/*Math functions
let x = 3.14;

x = Math.round(x); // round a variable;
x = Math.floor(x); // round to lower int;
x = Math.ceil(x); // round to heigher int;
x = Math.sqrt(x); // square root of a number;
x = Math.abs(x); // absolute value of a number;

*/

/*Password confirmation
let password;
let confirmPassword;

document.getElementById("myButton").onclick = function(){
    password = document.getElementById("p").value;
    confirmPassword = document.getElementById("pc").value;
    if(password != confirmPassword){
        document.getElementById("p1").innerHTML = "Password dont match ";
    }
}
*/

/*Calculate the side c of a triangle

let a;
let b;
let c;

a = window.prompt("Side A");
b =  window.prompt("Side b");

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(c);
*/

/*Add and sub program
let v = 0;

document.getElementById("add").onclick = function(){
    v +=1;
    document.getElementById("label").innerHTML = v;
}

document.getElementById("reset").onclick = function(){
    v = 0;
    document.getElementById("label").innerHTML = v;
}

document.getElementById("sub").onclick = function(){
    v -=1;
    document.getElementById("label").innerHTML = v;
}
*/

/*Check checkbox

document.getElementById("confirm").onclick = function(){
    if(document.getElementById("checkbox1").checked){
        console.log("Checked");
    }else{
        console.log("not checked");
    }
}
*/

/*Comparators
 == compare the value
 === compare the value and the type
*/
