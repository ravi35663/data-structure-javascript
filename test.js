function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let index = i;
        for(let j= i+1;j<arr.length;j++){
            if(arr[j] < arr[index]){
                index = j;
            }
        }
        if(index !==i){
            [arr[i],arr[index]] = [arr[index],arr[i]];
        }
    }
    return arr;
}

const arr = [4,1,5,7,8,0];
console.log("Result array is : ",selectionSort(arr));