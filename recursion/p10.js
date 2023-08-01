/*
    Write a recursive function called capitalizeFirst. Given an array of strings, 
    capitalize the first letter of each string in the array.
    //capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

const capitalizeFirst = (arr)=>{
    const result_array = [];
    if(arr.length === 0){
        return result_array;
    }
    result_array.push((arr[0][0]).toUpperCase()+arr[0].slice(1));
    return result_array.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana']))
console.log(capitalizeFirst(['ravi','amit','sumit']))
console.log(capitalizeFirst(['universe','space','earth']))
console.log(capitalizeFirst(['sun','moon','jupiter']))

