//map() used to apply a fuction to each of the element in an array

let vals = [4,5,8,9,1,5];
console.log(vals);
vals = vals.map( x => x * 2);
console.log(vals);


//fill()

let fillArr = [4,7,2,7];
fillArr.fill(Math.random());
console.log(fillArr);