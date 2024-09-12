/*
===> HashMap
    ->  Hash-Map is also known as hash-table.
    ->  Hash-Table are used to store key-value pairs
    ->  Hash tables are arrays, but the keys are not ordered.
    -> Unlike arrays, hash table are fast for all of the following operations
        ->  Finding values
        ->  Adding new-values
        ->  Moving Values
    ->  Because of thier speed, hash tables are very commonly used.
    ->  Javascript has "Objects" and "Maps" as a hash-table
*/
/*
===> What makes as good hash table:
    ->  Fast (i.e. constant time)
    ->  Doesn't cluster outputs at specific indices, but distributes uniformly
    ->  Deterministic (same input yield same output)
*/

/* Here is simple hash function*/
// function hash(key,arrayLength){
//     let total = 0;
//     for(let char of key){
//         // map 'a' to 1, 'b' to 2 'z' to 26 .etc
//         let i = char.charCodeAt(0) - 96;
//         total = (total + i) % arrayLength;
//     }
//     return total;
// }
// const item = "ivar"
// console.log(hash(item,11));
/*
===> Problems with above hash-function
    ->  Only hashes strings
    ->  Not constant time (linear in key length)
    ->  Could be little more random
*/

// Little bit updated hash function:
function hash(key,arrayLength){
    let total = 0;
    let PRIME = 31
    for(let i=0; i<Math.min(key.length,100);i++){
        // map 'a' to 1, 'b' to 2 'z' to 26 .etc
        let char = key[i];
        let j = char.charCodeAt(0) - 96;
        total = (PRIME * total + j) % arrayLength;
    }
    return total;
}
const item = "ivar"
console.log(hash(item,3));

/*
===> Note:
    -> We're creating our own hash-map
*/