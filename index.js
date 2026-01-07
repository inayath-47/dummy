// function processSingleOrder(orderId){
//     return new Promise(resolve=>{
//         const processTime = 500+ Math.random()*100+2000;
//         setTimeout(()=>
//         {
//             resolve({
//                 orderId,
//                 status :'processed',
//                 processTime: Math.round(processTime)
//             });
//         },processTime);
//     });
// }
// const orderBatch = ['order101','order102','order103','order104'];
// Promise.race(orderBatch.map(processSingleOrder))
// .then (result =>{
//     console.log('all orders are processed');
//     console.table(result);
//     const totalTime =  result.reduce ((sum, order)=>
//     sum + order,value.processTime,0);
//     console.log(`Total procesing time:${totalTime}ms`);
// })
// .catch(error=>{
//     console.error('Batch processing failed:',error);
// });
console.log('A');
setTimeout(()=>{
    console.log('B');

},0);
Promise.resolve().then(()=>{
    console.log('C');

});
console.log('D');













