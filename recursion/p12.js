/*
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized. 
    // let words = ['i', 'am', 'learning', 'recursion'];
    // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

const capitalizedWords = (works)=>{
    let temp_array = [];
    if(works.length === 0){
        return temp_array;
    }
    temp_array.push(works[0].toUpperCase());
    return temp_array = temp_array.concat(capitalizedWords(works.slice(1)));
}

console.log(capitalizedWords(['i', 'am', 'learning', 'recursion']))
console.log(capitalizedWords(['delhi', 'is', 'in', 'india']));
console.log(capitalizedWords(['england', 'is', 'better', 'county','to','live']))
console.log(capitalizedWords(['i', 'will', 'work', 'at','google','in','india','as','software','engineer']));


