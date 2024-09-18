function app(val,arr={}){
    arr[val] = val;
    return arr;
}


const l1 = app(10);
const l2 = app("abc",{});
const l3 = app(20);

console.log("List l1",l1)
console.log("List l2",l2)
console.log("List l3",l3)
