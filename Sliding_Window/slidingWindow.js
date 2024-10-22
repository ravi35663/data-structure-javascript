/*
    The sliding window approach is a simple and efficient technique to solve problems involving 'arrays' or 
    'strings' by examining a "window" (a subset of elements) that slides through the array, adjusting its size 
    or position as needed.

    Short Explanation:

    You start with a small portion (or window) of an array or string and move the window from left to right. 
    Instead of recalculating everything from scratch every time, you just adjust the current window by adding 
    new elements to it and removing old ones. This reduces the number of calculations, making the solution 
    faster.
*/

/*
    Example:
    Problem:     
        Find the maximum sum of any subarray of size k in an array.
    
    Solution: 
        Using a sliding window, we first calculate the sum of the first k elements (the first window). Then, 
        we slide the window by one element at a time. For each new window, we subtract the element that's no 
        longer in the window and add the new element.
*/

function maxSum(arr, k){
    let windowSum = 0;
    let maxSum = 0;
    for(let i=0;i<k;i++){
        maxSum += arr[i]
    }
    windowSum = maxSum;
    for(let i=k;i<arr.length;i++){
        windowSum += arr[i] - arr[i-k];
        if(maxSum < windowSum){
            maxSum = windowSum;
        }
    }
    return maxSum;
}

let arr = [1, 3, 2, 5, 7, 2];
let k = 3
const result = maxSum(arr,k);
console.log("Max sum is : ",result)

