function pivotIndex(arr,start=0,end=arr.length-1){
    let pi = start;
    let p_ele = arr[pi];
    for(let i=start+1;i<=end;i++){
        if(p_ele > arr[i]){
            pi++;
            [arr[pi],arr[i]] = [arr[i],arr[pi]];
        }
    }
    [arr[start],arr[pi]] = [arr[pi],arr[start]];
    return pi;
}

const quickSort = (arr,start=0,end=arr.length-1)=>{
    if(start < end){
        const pi = pivotIndex(arr,start,end);
        quickSort(arr,start,pi-1);
        quickSort(arr,pi+1,end);
    }
    return arr;
}

const ar = [3,7,2,-1,4,1,5,2,12,8,9];
console.log(quickSort(ar));