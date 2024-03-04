/*
    ==> Javascript to Find GCD and LCM of Two Numbers with and without recursive
*/

// GCD with and without recursion
// GCD: method-1(Naive method)

let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])
let temp_1 = num1<num2?num1:num2;
let temp_2 = num1>num2 ? num1:num2;

function GCD(a,b){
    while(a!=1){
        if(b%a==0){
            return a;
        }
        a--;
    }
    return 1;
}

const gcd = GCD(num1)