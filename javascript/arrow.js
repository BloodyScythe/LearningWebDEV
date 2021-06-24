//without the arrow function

function sum(a,b){
    return a+b
}
console.log(sum(7,3));

//with the arrow function
let sum1 = (a,b) => a+b;
console.log(sum1(5,5));

//single para arrow 
let isPositive = num => num>=0;
console.log(isPositive(-1));
console.log(isPositive(1));

//no parameter
mathRandNumber = () => Math.random;
console.log(mathRandNumber());
