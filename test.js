/* Quick Sort */

function pivotIndex(arr,start=0,end=arr.length-1){
    const PE = arr[start];
    let pivot_index = start;
    for(let i=start+1;i<=end;i++){
        if(PE > arr[i]){
            pivot_index++;
            [arr[i],arr[pivot_index]]=[arr[pivot_index],arr[i]];
        }
    }
    [arr[start],arr[pivot_index]] = [arr[pivot_index],arr[start]];
    return pivot_index;
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left < right){
        const pivot_index = pivotIndex(arr,left,right);
        quickSort(arr,left,pivot_index-1)
        quickSort(arr,pivot_index+1,right);
    }
    return arr;
}
const arr = [3,2,7,8,0,1];
const sortedArray = quickSort(arr);
console.log("Sorted array is : ",sortedArray);