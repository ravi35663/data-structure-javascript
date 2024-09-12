// Sort an array:
function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }else{
        let mid = Math.floor(arr.length/2)
        let left = arr.slice(0,mid)
        let right = arr.slice(mid)
        left = mergeSort(left);
        right = mergeSort(right);
        arr = mergeSortedArray(left,right);
    }
    return arr;
}

function mergeSortedArray(arr1,arr2){
    let result = [],i=0,j=0,m=arr1.length,n=arr2.length;
    while(i<m && j<n){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++
        }
    }
    while(i<m){
        result.push(arr1[i]);
        i++;
    }
    while(j<n){
        result.push(arr2[j]);
        j++;
    }
    return result;
}



// Triplets using pair sum approach
// function triplets(arr,s){
//     let result = [];
//     arr = mergeSort(arr);
//     console.log("Sorted Array is : ",arr);
//     // To keep triplets in order you have to sort them
//     for(let i=0;i<arr.length-2;i++){
//         let obj = {};
//         let target_sum = s - arr[i];
//         for(let j= i+1; j<arr.length;j++){
//             let t = target_sum - arr[j];
//             if(obj[t]){
//                 result.push([arr[i],t,arr[j]])
//             }else{
//                 obj[arr[j]] = true
//             }
//         }
//     }
//     return result;
// }

// Triplets using two points
function triplets(arr,s){
    arr = mergeSort(arr,s);
    let result = []
    for(let i=0;i<arr.length-2;i++){
        let target_sum = s - arr[i];
        // Two Pointer approach
        let start = i + 1;
        let end = arr.length - 1;
        while(start < end){
            let start_item = arr[start];
            let end_item = arr[end];
            if(start_item + end_item === target_sum){
                result.push([arr[i],start_item,end_item])
                end--;
                start++;
            }else if(start_item + end_item > target_sum){
                end--;
            }else{
                start++;
            }
        }
    }
    return result;
}


let arr = [4,5,3,2,1,6,7,8,9,15];
let s = 18;
console.log(triplets(arr,s));
