/*
    Array Products:
    Implement a function that takes in a vector of integers, and returns a vector of the same length, where each 
    element in the output array is equal to the product of every other number in the input array. Solve this 
    problem without using division. In other words, the value at output[i] is equal to the product of every 
    number in the input array other than input[i]. You can assume that answer can be stored inside int datatype 
    and no-overflow will occur due to products.

    Sample Input
    Both inputs and outputs are vectors.

    {1,2,3,4,5}
    Sample Output

    {120, 60, 40, 30, 24}
*/

function arrayProduct(arr){
    let len = arr.length;
    let left = new Array(len);
    let right = new Array(len);
    let prod = new Array(len);
    left[0] = 1;
    right[len-1] = 1;
    for(let i=1;i<len;i++){
        left[i] = left[i-1] * arr[i-1];
    }
    for(let i=len-2;i>=0;i--){
        right[i] = right[i+1] * arr[i+1];
    }
    for(let i=0;i<len;i++){
        prod[i] = left[i] * right[i]; 
    }
    // console.log("Left is: ",left,right);
    return prod;
}

const arr =  [1,2,3,4,5]
console.log("Result is : ",arrayProduct(arr));