// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [];
//! Normal loop
// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]);
// }
// console.log("Normal Copy: " + arr2);

//TODO spread Operator

// let arr3 = [];
// arr3 = [...arr, 11, 12, 13, 14, ...arr2]; //suntax [...]
// console.log("Spread Copy: " + arr3);

//! NORMAL METHOD

// function sum(a, b) {
//   console.log("Normal Sum:" + (a + b));
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

//TODO Rest Operator
// function sumAll(...args) {
//   let sum = 0;
//   for (let num of args) {
//     sum += num;
//   }
//   console.log("Rest Sum:" + sum);
// }
// sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);

//TODO Module import option
// import { printName, printAge, exportVar } from "./module.js";

// printName("Mayank Gupta");
// printAge("25");
// console.log(exportVar);

//TODO Default import
// import user from "./module.js";
// console.log(`defaultImportVar: ${user}`);

//TODO set
// const mySet = new Set();
// mySet.add("A");
// mySet.add("B");
// mySet.add("C");
// mySet.add("A");
// mySet.delete("B");
// console.log([...mySet]);

// const mySet1 = new Set();
// arr3.forEach((ele) => {
//   mySet1.add(ele);
// });
// console.log(mySet1);

//TODO Map
// const mapObj = new Map();
// mapObj.set("name", "mayank");
// mapObj.set("age", "25");
// mapObj.set("city", "Delhi");
// console.log(mapObj);

//TODO Array.find()
// const num = [1, 2, 3, 4, 2];
// const foundElement = num.find((element) => element === 2);
// if (!foundElement) {
//   console.log("No Element Found!");
// } else {
//   console.log(`Found Element is :${foundElement}`);
// }
// const myNumber = num.find((ele)=>ele>2)
// console.log('Array with number greater than 2: ',myNumber)

// //TODO Array.findIndex()
// const index = num.findIndex((element) => element > 2);
// console.log(`index of the first element greater than 2: ${index}`);

//TODO Default Parameters
// function addNumbers(a=5, b=1){
//     return a+b;
// }
// console.log("Normal Parameters: ",  addNumbers(3, 4));
// console.log("Default Parameters: ",  addNumbers());


//TODO Destructuring of array
// let numbers=[1,2,3,4,5];
// let [first,second]=numbers;
// console.log({first, second});
// let [a,b,c,,d] = numbers
// console.log(a,b,c,d);
// console.log({a,b,c,d});
// console.log([a,b,c,d]);

//TODO Destructuring of objct
// let obj={x:10, y:20, z:30};
// let {x,z}=obj;
// console.log({x,z})
// console.log(x,z)

//TODO Deep copy and shalow copy

let myObj2 = {
  name: "Mayank",
  gender: "Male",
  courses: ["Java", "OOPS"]
}

//Shallow Copy
// let shallowCopy = {...myObj2} 
let shallowCopy = Object.assign({}, myObj2);

console.log("Object before modification myObj2: ", myObj2);
console.log("Object before modification shallowCopy: ", shallowCopy);

shallowCopy.name ="Rahul";
// shallowCopy.courses[0] = "DSA"

console.log("Object after modification myObj2: ", myObj2);
console.log("Object after modification shallowCopy: ", shallowCopy);




// let myObj1 = {
//   name: "Mayank",
//   gender: "Male"
// }
// let deepCopy = JSON.parse(JSON.stringify(myObj1)) //deep copy

// console.log("Object before modification myObj1: ", myObj1);
// console.log("Object after modification deepCopy: ", deepCopy);

// deepCopy.name ="Rahul";

// console.log("Object after modification myObj1: ", myObj1);
// console.log("Object after modification deepCopy: ", deepCopy);

