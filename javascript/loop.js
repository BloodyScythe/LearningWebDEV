/* var car = ['chevy','mustang','Bolt'];

for(model in car){
    console.log("car is ",car[model]);

} */

/* var symbol = window.prompt("Enter the Symbol");
var rows = window.prompt("Enter the rows");
var column = window.prompt("Enter the column");

for(let i=0;i<=rows;i++){

    for( let j=0; j<=column;j++){
        document.getElementById("thisid").innerHTML += symbol;
    }
    document.getElementById("thisid").innerHTML +="<br>";
} */


// string operators
/* var names = "Dhruv,Vaibhav,Madhav";
// var arryName[0];
var arryName = names.split(",");

console.log(arryName);
console.log(arryName[0]); */
/* 
total = 0;
cart = [1,2,7];

function checkOut(element){

    total += element;
}

cart.forEach(checkOut);

console.log(total); */

// **************callbacks**************

/* function displayConsole(message){

    console.log(message);
}

function displayDOM(){

    document.getElementById("thisid").innerHTML = message;
}

function setMessage(text, callbacks){
    message = text;
    callbacks(message); 
}
// for console
setMessage("hello Mom!",displayConsole);
//for DOM
setMessage("hello Mom!",displayDOM); */


// nested function\

/* function userLogin(){

    username = "Dhruv";
    inbox=0;
    function userID(){
        console.log("You have ",inbox," Messages");
    }

    function userInbox(){
        console.log("Hello ",username," Welcome");
    }
    userInbox();
    userID();
}
userLogin();
 */

//closure method

/* function fontSize(size){

    return function(){                      //annoyomus function to retain value of any variale that would have been used in it

        document.body.style.fontSize = size + "px";
    }
}

function fontStyle(style){

    return function(){ 

        document.body.style.fontFamily = style;
    }
}


let size20 = fontSize(20);
let size30 = fontSize(30);

size20();
size30(); */

//arrow function

/* function hello(){

    return "hello world";
} */

/* hello = () => "hello world";

console.log(hello()); */

//multi para 

/* let x = "Dhruv";
let y = "kaith";

hello = (x,y) => x+" "+y+" Hello"; //you don't need () for single argument 

console.log(hello(x,y)); */

// ******* index.js *******

 

// arrow function =>

// shortcut for a function expression

/*  

let hello;

let x = "Yo";

let y = "bro!";



// *********************

// function expression

// *********************



hello = function() {

  return "Hello World!";

}

console.log(hello());



// *********************

// arrow function

// *********************



hello = () => "Hello World!";

console.log(hello());

 

// *********************

// arrow function w/ 1 argument

// *********************



hello = x => x + "World!";

console.log(hello(x));

 

// *********************

// arrow function w/ multiple arguments

// *********************



hello = (x,y) => x + y;

console.log(hello(x, y));

 

// *********************

// arrow function w/ multiple lines

// *********************



hello = (x,y) => {

    console.log(x);

    console.log(y);

};

hello(x,y);

 

// *********************

// MAP

// *********************



let storeUSD = [5, 6, 7, 8, 9];

let storeEUR;

 

storeEUR = storeUSD.map(value => value *= 0.84);

console.log(storeEUR);

 

// *********************

// FILTER

// *********************



let students = [16, 17, 18, 19, 20];

let adultStudents;

 

adultStudents = students.filter(age => age >= 18);

console.log(adultStudents);

 

// *********************

// REDUCE

// *********************



let letters = ["H", "E", "L", "P"];

let word;

 

word = letters.reduce((total, nextLetter) => total + nextLetter);

console.log(word); */

//place holders

let fname = "Dhruv";
let lname = "kaith";
total = 10;
tax = 0.05;


console.log(`Hello ${fname} ${lname}`);
console.log(`Your total is $${10}`);