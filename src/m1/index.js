const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkOddOrEven(str){
if(str.length % 2){//홀수면
 return odd;    
}
return even;
}
console.log(checkNumber(10));
console.log(checkOddOrEven('hello'));