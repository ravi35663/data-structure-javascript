function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    return arr;
}
const arr = [123,2,1,2,4,90,34,-9,0]
console.log("Sorted array is ",bubbleSort(arr));
