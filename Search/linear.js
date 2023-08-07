const findItem = (arr,value)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1
}
console.log(findItem([10,1,3,90,22,1,5],90))
