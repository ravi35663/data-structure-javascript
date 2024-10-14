function test(arr){
    let ps = new Array(arr.length);
    ps[0] = arr[0];
    for(let i=1;i<arr.length;i++){
        ps[i] = ps[i-1] + arr[i];
    }
    console.log("prefix sum is :",ps);
}

const arr = [1,2,-3,4,-1];
test(arr)