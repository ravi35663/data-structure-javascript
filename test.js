/*
    Write a function called collectStrings which accepts an object and returns an array of 
    all the values in the object that have a typeof string
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }
    collectStrings(obj) // ["foo", "bar", "baz"])
*/
function collectStrings(obj){
    const values = Object.values(obj);
    let result = [];
    for(let i=0;i<values.length;i++){
        let item = values[i];
        if(item.constructor === Object){
            const r = collectStrings(item)
            result = result.concat(r);
        }else if(item.constructor === String){
            result.push(item);
        }
    }
    return result;
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
const res = collectStrings(obj) // ["foo", "bar", "baz"])
console.log("Result is: ",res);