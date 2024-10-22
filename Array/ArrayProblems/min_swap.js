/*

    Given an array of size N, find the minimum number of swaps needed to make the array sorted.
    
    Sample Input:   a1 = [5, 4, 3, 2, 1]
    Sample Output:  2

    Sample Input:   a1 = [10,11,5,4,3,2,1]
    Sample Output:  4
*/

function minimumSwap(arr){
    let sortArr = [...arr].map((value,index)=> ({index,value}));
    sortArr.sort((a,b)=> a.value-b.value);

    // lets keep the visited index so that you will not retreave the same index again
    let visists = new Array(arr.length).fill(false);
    let totalSwap = 0;
    // traverse each node
    for(let i=0;i<arr.length;i++){
        // Check if item is already visited or item is at the right place if yes then skip the further action
        if(visists[i] || sortArr[i].index === i){
            continue;
        }

        let j = i;
        let cycle = 0;
        // If index/item is not visited the visit the index and thier cycle as well
        while(!visists[j]){
            visists[j] = true;
            j = sortArr[j].index; // cycle of the jth element
            cycle++;
        }

        // check if cycle is greater than 1 (at least 3 elment should be there to for a cycle)
        //  swap  = totalCycle - 1 if totalCycle > 1
        if(cycle > 1){
            totalSwap += cycle - 1;
        }
    }
    return totalSwap
}

const sampleInputs = [
    { input: [1, 2, 3, 4, 5], output: 0 },       // Already sorted, 0 swaps required
    { input: [5, 4, 3, 2, 1], output: 2 },       // Reverse sorted, requires 2 swaps
    { input: [4, 3, 1, 2], output: 3 },          // Unsorted, 3 swaps required
    { input: [7, 9, 5, 3, 6, 8], output: 4 },    // Random array, requires 4 swaps
    { input: [10, 1, 7, 3, 9, 4], output: 5 },   // Random array, requires 5 swaps
    { input: [2, 1, 3], output: 1 },             // Small array, requires 1 swap
    { input: [4, 6, 5, 7], output: 1 },          // Small array, 1 swap required
    { input: [10, 8, 6, 4, 2], output: 2 },      // Reverse sorted, 2 swaps required
    { input: [1, 2, 9, 4, 5, 8, 7], output: 3 }, // Mixed array, 3 swaps required
    { input: [9, 8, 7, 6, 5, 4, 3, 2, 1], output: 4 }, // Reverse sorted, requires 4 swaps
    { input: [10, 11, 5, 4, 3, 2, 1], output: 4 }, // Mixed array, requires 5 swaps
    { input: [5, 4, 3, 2, 1], output: 2 }        // Reverse sorted, requires 2 swaps
];

sampleInputs.forEach(item=>{
    const result = minimumSwap(item.input);
    // console.log("Results: ",result);
    if(result == item.output){
        console.log(`Test case pass for: ${item.input}`);
    }else{
        console.log(`Test case failed for: ${item.input}`);
    }
})


