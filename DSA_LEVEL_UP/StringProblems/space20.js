/*
==> Space20
->  Given a string, write a function to replace all spaces in a string with '%20'. 
    It is given that the string has sufficient space at the end to hold the additional characters.

    input: hello world,  how are you?
    output: hello%20world,%20%20how%20are%20you?
*/

// Method - 1

function replaceSpace(str){
    let result = "";
    for(let i=0;i<str.length;i++){
        result += str[i] === ' ' ? "%20" :str[i]
        if(str[i] === ' '){
            result
        }
    }
    return result;
}

const str = 'hello world,  how are you?'
console.log("Result is : ",replaceSpace(str));