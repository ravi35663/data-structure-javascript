// 
const mergeTwoArrays = (arr1,arr2)=>{
    let i=0;
    let j=0;
    let m = arr1.length;
    const n = arr2.length;
    const arr = [];
    // 
    while(i<m && j<n){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++;
        }
    }
    // Appending remaining elements
    while(i < m){
        arr.push(arr1[i]);
        i++;
    }
    // Appending remaining elements
    while(j < n){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}
console.log("Merge two sorted arrays" ,mergeTwoArrays([10,11,17],[1,2,30]));