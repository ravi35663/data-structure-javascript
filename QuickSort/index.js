const pivotElementIndex = (arr,start=0,end=arr.length-1)=>{
    let pivot_index = start;
    let pivot_ele = arr[start];
    for(let i=start+1 ; i<=end;i++){
        if(pivot_ele > arr[i]){
            pivot_index++;
            [arr[pivot_index],arr[i]] = [arr[i],arr[pivot_index]];
        }
    }
    [arr[pivot_index],arr[start]] = [arr[start],arr[pivot_index]]
    return pivot_index;
}

const quickSort = (arr,left = 0,right = arr.length-1) => {
    if(left < right){
        let pivotIndex = pivotElementIndex(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
const ar = [3,7,2,-1,4,1,5,2,12,8,9];
console.log(quickSort(ar));