const pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1")
    },5000);
})

const pro2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2")
    },10000);
})


async function example(){
    console.log("Hello World");
    const p2= await pro2;
    console.log("Promise 2 is resolved",p2);

    const p1= await pro;
    console.log("Promise 1 is resolved",p1);
}

example();