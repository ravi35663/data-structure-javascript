// Bubble sort | Selection sort | Insertion Sort

const bubbleSort = (arr)=>{
    let is_already_sorted;
    let bubbleCount=0
    for(let i=0;i<arr.length;i++){
        is_already_sorted = true;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                is_already_sorted = false;
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
            bubbleCount++;
        }
        if(is_already_sorted){
            console.log("Bubble count ",bubbleCount);
            return arr;
        }
    }
    console.log("Bubble count ",bubbleCount);
    return arr;
}

const selectionSort = (arr)=>{
    let selectionCount = 0;
    for(let i=0;i<arr.length;i++){
        let min_index = i;
        for(let j= min_index+1 ;j<arr.length;j++){
            selectionCount++;
            if(arr[min_index] > arr[j]){
                min_index = j;
            }
        }
        if(i !== min_index){
            [arr[i],arr[min_index]] = [arr[min_index],arr[i]];
        }
    }
    console.log("Selection count ",selectionCount);
    return arr;
}

const insertionSort = (arr)=>{
    let insertionCount = 0
    for(let i=1; i<arr.length;i++){
        let currentValue = arr[i];
        for(let j=i-1; j>=0 && arr[j] > currentValue;j--){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            insertionCount++;
        }
    }
    console.log("Insertion count ",insertionCount);
    return arr;
}
// const arr = [17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27];
console.log(`Current Array:${[17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27]} and BubbleSort:${bubbleSort([17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27])}`)
console.log(`Current Array:${[17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27]} and SelectionSort:${selectionSort([17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27])}`)
console.log(`Current Array:${[17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27]} and InsertionSort:${insertionSort([17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27])}`)
