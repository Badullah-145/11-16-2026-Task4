// Part 1 – Basic Functions

// 1.	Create a function named welcome() and print "Welcome to JavaScript".
function welcome ()
{
    console.log("Welcome to Javascript");
}
welcome();

// 2.	Create a function named student() and print your name, age, and city.
function student(){
    console.log("Name : Badullah");
    console.log("Age : 25");
    console.log("City : Rayachoty");
}
student();

// 3.	Create a function named addition() to add two numbers.
function addition(){

    let a = 10;
    let b = 15;
    console.log(a+b);
}
addition();

// 4.	Create a function named calculator() to perform addition and subtraction.
function calculator (){
    let a1 = 20;
    let b1 = 15;

    console.log("Addition : ", a1+b1);
    console.log("substraction : ", a1-b1);
}
calculator();

// 5.	Create a function named company() and print "Welcome to Stackly".
function company(){
    console.log("Welcome to Stackly");
}
company();

// 6.	Create a function named multiplication() to multiply two numbers.
function multiplication (){
    let a3 = 10;
    let b3 = 15;

    console.log("Multiplication : ",a3*b3)
}
multiplication();

// 7.	Create a function named greeting() and call it three times.
function greeting(){
    console.log("Welcome");
}

greeting();
greeting();
greeting();

// Part 2 – Parameters and Arguments

// 8.	Create a function that accepts two parameters and prints their addition.
function add(a, b){

    console.log(a+b)

}
add(2,3)

// 9.	Create a function that accepts three parameters and prints all three values.
function ThreeParameters(a,b,c){
    console.log(a,b,c)
}
ThreeParameters(1,2,3);

// 10.	Create a function that accepts employee name and salary and prints them.
function employee(name, salary){
    console.log("Name: ", name);
    console.log("Salary : ", salary);
}
employee("Badullah", 25000);

// 11.	Create a function that accepts three numbers and performs multiplication.
function ThreeNumbers(a,b,c){

    console.log("Multiplication: ", a*b*c);
}
ThreeNumbers(1,2,3);

// 12.	Create a function that accepts your name as an argument and prints a welcome message.
function welcome(name){

    console.log("Welcome Mr.", name);

}
welcome("Badullah");

// 13.	Call a function with two arguments when it has three parameters. Observe the output.
function TwoArguments(a,b,c){
    console.log(a,b); // 1,2
    console.log(a,b,c); // 1, 2, undefined
}
TwoArguments(1,2)

// 14.	Call a function with three arguments when it has two parameters. Observe the output.
function ThreeArguments(a,b){

    console.log(a,b) //1,2
}
ThreeArguments(1,2,3);

// Part 3 – Return Statement


// 15.	Create a function that returns the addition of two numbers.
function add1(a, b){

    return(a+b);

}
console.log("Addition is :", add1(2,3))

// 16.	Create a function that returns the subtraction of two numbers.
function sub(a, b){

    return(a-b);

}
console.log("substraction is :", sub(7,3))

// 17.	Create a function that returns the multiplication of two numbers and store the result in a variable.
function mul(a, b){

    return(a*b)

}
let result = mul(4,5)
console.log("Multiplication is :", result)

// 18.	Create a function that returns a person's age. Print the returned value outside the function.
function Age(age){

    return(age);
}
let res_age = Age(25);
console.log("Person's age :", res_age);

// 19.	Create a function that returns the division of two numbers.
function Div(a, b){

    return(a/b);

}
let res = Div(10,5)
console.log("Division is :", res);

// 20.	Create one function that returns a value and another function that prints that returned value.
function add1(a,b){

    return(a+b);
    
}
function display(){

    result = add1(5,5);
    console.log("Addition : ", result);
}
display();


// Part 4 – Scope and Hoisting

// 21.	Create a variable using var inside a block and try accessing it outside the block.
{

    var a = 10;
}
console.log(a)

// 22.	Create a variable using let inside a block and try accessing it outside the block.
{
    let b1 = 10;
}

console.log(b1);


// 23.	Create a variable using const inside a block and try accessing it outside the block.

{
    const c1 = 10;
}
console.log(c1);

// 24.	Create a function with a var variable inside it and try accessing that variable outside the function.

function MyName(){
    var myname = "Badullah";
}

MyName();

console.log(myname)

// 25.	Create a var variable and print it before initialization. Observe the output.

console.log(value)
var value = 10;



// 26.	Create let and const variables and try accessing them before initialization. Observe the result.

console.log(value2)
let value2 = 10;

console.log(value3)

const value3 = 110;

// Part 5 – Function Types
// 27.	Create a named function that accepts a name and prints it.

function greet(name) {
  return ("Hello! "+name);
}
console.log(greet("Badullah"));

// 28.	Create an anonymous function and store it in a variable. Pass your name as an argument.

var greet1 = function(name) {
  return "Hi there! "+ name;
};
console.log(greet1("Badullah"));

// 29.	Create an arrow function that accepts two numbers and prints their addition.


let add2 = (a, b) => {
    console.log(a + b);
};

add2(10, 20);

// 30.	Create three functions:
// o	Named function – subtraction
// o	Anonymous function – multiplication
// o	Arrow function – division
// Call all three functions with different arguments.

function subtraction1(a, b) {
    console.log(a - b);
}

subtraction1(20, 10); //10
subtraction1(10,5,6) //5
subtraction1(10) // NaN


//anonymous function-multiplication
let multiplication1 = function(a, b) {
    console.log(a * b);
};

multiplication1(5, 4); //20
multiplication1(5, 4,3); //20
multiplication1(5); //NaN


//arrow function-division
let division1 = (a, b) => {
    console.log(a / b);
};

division1(20, 5); //4
division1(20, 5,4); //4
division1(20); // NaN

// Practice rule: Complete all 30 tasks without using loops, arrays, or advanced function concepts. For Tasks 21–26, predict the output or error before running the code.

