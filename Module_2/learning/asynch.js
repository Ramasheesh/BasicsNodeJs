
console.log('task1');

setTimeout(() => {
    console.log('task2');// this is asynchronus 
}, 2000);
console.log('task3');


// async drawBack
/*
let a =10;
let b=0;

setTimeout(() => {
    b=20;
}, 2000);
console.log(a+b);
*/
//-----------handle----async//via promises

// let a =10;
// let b=0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         b=30;
//         resolve(b);
//     }, 2000); 
// })
// waitingData.then((b)=>{
//     console.log(a+b);
// })