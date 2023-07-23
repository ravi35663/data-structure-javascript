/*
    WAP to count number of characters in a string
*/

const str = process.argv[2]
const countChar = (str)=>{
    const obj = {};
    for(let char of str){
        // obj[char] = 1 + obj[char]  || 1;
        obj[char] = ++obj[char]  || 1;
    }
    console.log(obj)
}

countChar(str);
