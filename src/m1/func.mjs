import {odd, even} from './var.mjs';

function checkOddOrEven(num){
    if(num % 2){//홀수입니다
    return odd;    
    }
    return even;
}
export default checkOddOrEven;