/**
 * Selection Sort
 * [1,2,10,9,3,4,-9,-5]
*/

const selectionSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        let min_index = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min_index]){
                min_index = j;
            }
        }
        // To reduce unnecessary swap
        if(i !== min_index){
            // swap first element with minimum value
            [arr[i],arr[min_index]] = [arr[min_index],arr[i]];
        }
    
    }
    return arr;
}

console.log("Sorted array is ",selectionSort([1,2,10,9,3,4,-9,-5]));