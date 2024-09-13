/*
    Given an array containing N integers, find length of the longest band.
    A band is defined as subsequence which can be re-ordered in such a manner that all elements appears
    consequntly (i.e. the absolute difference of 1 between neighbouring elements)
    Here,
    A longest band is a band which contains maximum subsequence .
    const arr = [1,9,3,0,18,5,2,4,10,7,12,6];
    max_band = [0,1,2,3,4,5,6,7]    which is 8

    Sol: you can solve it be sorting the arr but time complexity will be NLogN.
*/

/* Below program has time complexity is O(n)*/ 
function findMaximumBand(arr){
    let obj = {};
    let max_band = 0;
    let count = 0;
    arr.forEach(item => obj[item] = true);
    for(let i=0; i<arr.length; i++){ // 12
        let item = arr[i];
        let band = 0;
        if(obj[item-1] === undefined){
            while(obj[item]){
                item++;
                band++
                count++
            }
            if(band > max_band){
                max_band = band;
            }
        }else{
            count++;
        }
    }
    console.log("Count is : ",count);
    return max_band
}

const arr = [1,9,3,0,18,5,2,4,10,7,12,6];
console.log("Maximum band: ",findMaximumBand(arr)); 