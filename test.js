/*
    You are given a string, you need to print all subsequences of the string sorted by length and 
    lexicographic order if length is the same.

    Sample Input:
        abcd

    Sample Output:
        '',a, b, c, d, ab, ac, ad, bc, bd, cd, abc, abd, acd, bcd, abcd

*/

/*
    Length of the string is n then subsequence of the string is 2^n .
*/

function subsequence(input,output,arr){
    // Base-case
    if(input.length === 0){
        // console.log("output is: ",arr);
        arr.push(output);
        return arr;
    }

    // Recursion call
    let item = input[0];
    let reduced_input = input.slice(1);
    //Add item in output
    subsequence(reduced_input,output+item,arr);
    // Leave output as it is
    subsequence(reduced_input,output,arr);
}


function sortedSubstrings(str){
    let arr = [];
    let output = '';
    subsequence(str,output,arr);
    arr.sort((a,b)=>{
        if(a.length === b.length){
            return a < b? -1:1
        }else if(a.length < b.length){
            return -1
        }
        return 1
    })
    console.log("Result is : ",arr);
}

const str = "abcd"
sortedSubstrings(str);