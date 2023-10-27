// console.log("A");
// console.log("B");
// // for(let i= 0; i<1000000000; i++){

// // }
// setTimeout(()=>{
//     console.log("C");
// },5000)
// console.log("D");

//! CallBack Hell (hectic task)
// setTimeout(()=>{
//     console.log("hello");
//     setTimeout(()=>{
//         console.log("hey");
//         setTimeout(()=>{
//             console.log("Namaste");
//             setTimeout(()=>{
//                 console.log("hii");
//                 setTimeout(()=>{
//                     console.log("hola");
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

//TODO ---------Promise-----------
// let userLoggedIn = false;

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(userLoggedIn){
//             resolve();
//         }
//         else{
//             reject()
//         }
//     },2000);
// })
// // console.log(promise);
// promise.then(()=>{
//     console.log('User Logged In');
// })
// .catch(()=>{
//     console.log('Failed to login')
// });

//TODO ----------Another Way and preffered way----------------
// let foodOrdered = false;
// function checkOrder() {
//     const promise2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(foodOrdered){
//                 resolve("order recieved");
//             }
//             else{
//                 reject('order falied')
//             }
//         },4000);
//     })
//     return promise2;
// }
// console.log(checkOrder());

//? .then with two arguments
// checkOrder().then(
//     (result)=>{
//     console.log(result)
//     },
//     (dataMessage)=>{
//         console.log(dataMessage)
//     }
// );

//? .then with one argument(.catch should used)
// checkOrder().then((dataMessage)=>console.log(dataMessage))
// .catch((dataMessage)=>console.log(dataMessage));

// TODO --------------promise methods---------------

//? Promise.all()

// let promise1 = Promise.resolve("one");
// let promise2 = Promise.resolve("two");
// // let promise3 = Promise.reject("three");
// let promise3 = Promise.resolve("three");
// let promise4 = new Promise((res, rej)=>{
//     setTimeout(()=> res("four") , 2000)
// })
// // console.log(Promise.all([promise1,promise2,promise3,promise4]))
// Promise.all([promise1,promise2,promise3,promise4])
// .then((result)=> console.log(result))
// .catch((error)=>console.log(error))

// ? Promise.allSettled()

// let promise1 = Promise.resolve("one");
// let promise2 = Promise.resolve("two");
// let promise3 = Promise.reject("three");
// // let promise3 = Promise.resolve("three");
// let promise4 = new Promise((res, rej)=>{
//     setTimeout(()=> res("four") , 2000)
// })
// // console.log(Promise.allSettled([promise1,promise2,promise3,promise4]))
// Promise.allSettled([promise1,promise2,promise3,promise4])
// .then((result)=> console.log(result))
// // .catch((error)=>console.log(error))

// ? Promise.race()

// let promise1 = new Promise((res, rej)=>{
//     setTimeout(()=> res("one") , 4000)
// })
// let promise2 = new Promise((res, rej)=>{
//     setTimeout(()=> rej("two") , 2000)
// })
// // let promise2 = new Promise((res, rej)=>{
// //     setTimeout(()=> res("two") , 2000)
// // })
// let promise3 = new Promise((res, rej)=>{
//     setTimeout(()=> res("three") , 3000)
// })
// // console.log(Promise.race([promise1,promise2,promise3]))
// Promise.race([promise1,promise2,promise3])
// .then((result)=> console.log(result))
// .catch((error)=>console.log(error))

// ? Promise.any()

// let promise1 = new Promise((res, rej)=>{
//     setTimeout(()=> rej("one") , 4000)
// })
// // let promise1 = new Promise((res, rej)=>{
// //     setTimeout(()=> res("one") , 4000)
// // })
// let promise2 = new Promise((res, rej)=>{
//     setTimeout(()=> rej("two") , 2000)
// })
// // let promise2 = new Promise((res, rej)=>{
// //     setTimeout(()=> res("two") , 2000)
// // })
// let promise3 = new Promise((res, rej)=>{
//     setTimeout(()=> rej("three") , 3000)
// })
// // let promise3 = new Promise((res, rej)=>{
// //     setTimeout(()=> res("three") , 3000)
// // })

// // console.log(Promise.any([promise1,promise2,promise3]))
// Promise.any([promise1,promise2,promise3])
// .then((result)=> console.log(result))
// .catch((error)=>console.log(error))

// ? async and await keywords

//function to fetch data from API
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Mayank Gupta", age: 25 };
      resolve(data);
    }, 1000);
  });
}

//Asynchronouus function using async/await
async function getUserDetails() {
  try {
    //wait for the promise toresolve before continuing
    const user = await fetchData();
    console.log(`Name : ${user.name}, Age : ${user.age}`);
    return user; //The resolved value will be returned as a fulfilled promise
  } catch (err) {
    console.log("Error in Fetching Data", err);
    throw err; //Rejected promises are propagated upwards
  }
}
getUserDetails();
