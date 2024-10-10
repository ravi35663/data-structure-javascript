// Max Sub-Array Sum

function maxSubArraySum(arr,n){
    if(arr.length <n){
        return null;
    }
    // find out 1st n number sum
    let sum = 0;
    for(let i=0;i<n;i++){
        sum+=arr[i];
    }
    let max_sum = sum;
    for(let i=n;i<arr.length;i++){
        sum  = sum + arr[i] - arr[i-n];
        if(sum > max_sum){
            max_sum = sum;
        }
    }
    return max_sum
}

const arr = [1,2,5,2,8,1,5];
const n = 2;