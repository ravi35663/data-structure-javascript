const arr = [1,2,3,4,5,6,7,8,9];
// Polyfills

Array.prototype.myMap = function(callback){
    let resultArr = [];
    for(let i=0;i<this.length;i++){
        resultArr.push(callback(this[i]));
    }
    return resultArr;
}

const res = arr.myMap(item=>{
    return item*10;
});

console.log("Res array ",res);