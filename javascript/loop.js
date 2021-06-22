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

function userLogin(){

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


