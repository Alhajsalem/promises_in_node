var asyncAdd = (a,b) =>{


    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
         if(typeof a == 'number' && typeof b == 'number'){
             resolve(a+b);
         }   else{
             reject('Wrong type you wana add')
         }
        },5000);

    });

}


asyncAdd(1,100).then((res)=> {

    console.log(res)

    return asyncAdd(res,'Hallo').then((res)=>{
        console.log(res)
    },(error)=>{

        console.log(error);
    })

},(error)=>{
    console.log(error);
});





// var somePromise  =  new Promise((resolve, reject)=>{
//
//     setTimeout(()=>{
//
//        // resolve('Hey. It worked');
//
//         reject('unable to fulfill promise')
//
//     },2500);
//
//
//
// });
//
// somePromise.then((message)=>{
//
//     console.log('Sucess', message);
// },(message)=>{
//     console.log('bad request', message);
// })