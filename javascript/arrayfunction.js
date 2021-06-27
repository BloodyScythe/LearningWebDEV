//map() used to apply a fuction to each of the element in an array

let vals = [4,5,8,9,1,5];
console.log(vals);
//with arrrow
vals = vals.map( x => x * 2);
console.log(vals);


//fill()

let fillArr = [4,7,2,7];
fillArr.fill(Math.random());
console.log(fillArr);

//***************************for each()************************///

let total = 0;
let cart = [5,6,7,8];
//without arrow
function cartTotal(element){
    total+= element;

}
cart.forEach(cartTotal);
console.log(total);

//with arrow


//***************filter()****************** */

let students = [16,17,18,19,20];

function checkStudentAge(age) {
    if(age>=18)
    return age
}

let adultStudent = students.filter(checkStudentAge);
console.log(adultStudent);

//*********  reduce() *********************/

let word = ['H','E','L','P'];
//without arrow
function combine(accumalator, nexword){

    return accumalator += nexword;
}

let fullword = word.reduce(combine);
console.log(fullword);