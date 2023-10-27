// for(let i=1; i<5; i++){
//     console.log(i+" ");
// }

//implicit conversion
// let a= 10;
// let b = true;
// let c = a+b;
// console.log(c);
// console.log(typeof(a) + " " + typeof(b) + " " + typeof(c));

// taking input from promt works only in
// var name = prompt("Enter yur name");
// console.log("Hello" + name + "!");

// let a = 3;
// if(a>0){
//     console.log(`a is ${a} number`);
// }
// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2);
// sum(3,2,5,4,8,6);
// sum(4);

// console.log(a);
// var a =10;

// print();

// function print(){
//     console.log("mayank");
// }


// let p = 25;
// let q = true;
// console.log(p+q);
// let user = {  
//     jaiten : 100,
//     mansi : 240,
//     mayank : 500,
//     virendra: 420

// };
// let sum = 0;
// for(let prop in user){
//     sum+=user[prop]
// }
// console.log(sum);
// const arr = [1,2,3,4,5,6,8];

// console.log(arr.slice(-3))

// const person = {
//     name: "Mayank",
//     age: 24,
//     1 :"no"
// }
// console.log(person["1"]);

// let obj1 = {
//     name: "Mayank"
// }
// let obj2 = {
//     name: "Mayank"
// }
// // let obj2=obj1
// console.log(obj1==obj2);
// console.log(obj1===obj2);

// let ans = (x)=> 2*x;

// let x= 5;
// console.log(ans(x));
// var a=5;
// let str1 = "The rain in SPAIN stay1s mainly in t4he pl8ain";
// let str2 = "My Name is Gupta";
// const regex = /[A-Z1-9]/g;
// // let str3 = `${a} is the value`;
// let ans = str1.match.apply;
// // let ans = str1 + " " +str2
// console.log(str1);
// let arr = [5 , 3 , 2 , 4, 9 ,10];
// let even = arr.filter((val) => {
//     return val%2==0;
// });
// let square = even.map((val)=>{
//     return val*val;
// });
// let mul = square.reduce((val1, val2)=>{
//     return val1*val2;
// })
// console.log(mul);


// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// Repeat a String Repeat a String

// repeatStringNumTimes("*", 3) should return the string ***.

// repeatStringNumTimes("abc", 3) should return the string abcabcabc.

// repeatStringNumTimes("abc", 4) should return the string abcabcabcabc


// let str = "mayank";
// let num = 3;
// let ans = "";
// if(num>0){
//     while(num-->0){
//         ans+=str;
//     }
// }
// console.log(ans);


// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

// :largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].


// function max(arr){
//     let max = -Number. MAX_VALUE;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// arr = [[13, 27, 18, 26], [4, 5, 1, 3],[32, 35, 37, 39], [1000, 1001, 8571]];
// let ans = [];
// for(let i=0; i<arr.length; i++){
//     let maxValue = max(arr[i]);
//     ans.push(maxValue);
// }
// console.log(ans);


// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

// let arr = ["a","b", "c", "d"];
// let groups = 2;

// function covert(arr , length){
//     let res = [];
//     while(arr.length>0){
//         res.push(arr.splice(0, length));
//     }
//     return res;
// }
// let ans = covert(arr, groups);
// console.log(ans);



// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


// let arr = [2, 3, 1];
// let num = 4;
// function insert(arr , num){
//     arr.sort((a,b) => a-b);
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>num){
//             return i;
//         }
//     }
//     return arr.length;
// }
// console.log(insert(arr, num));

//-------------------------------map-------------------------------------------

// const numbers = [1,2,3,4,5];
// const string = numbers.map((num)=> {
//     console.log(String(num));
//     return (String(num));

// });
// console.log('string', string );

//-------------------------------------reduce---------------------------------------
// let arr =[1,2,3,4,5];
// let ans = arr.reduce((sum , val)=>
//     sum+val ,0
// );
// console.log("res", ans);

// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line
//   let arr1=[];
//    let newArr = arr1.concat(arr);

//   return newArr.sort((a,b)=> {
//     return a===b  ? 0 : a>b ? 1 : -1;
//   });

//   // Only change code above this line
// }

// console.log(nonMutatingSort(globalArray));


//---------------------------------Math.floor & math.random-----------------------------------

// function randomWholeNum() {
//     let val = Math.random();
//     console.log(val);
//     val*=10;
//     console.log(val);
//     return Math.floor(val);
// }
// console.log(randomWholeNum());

//--------------------------------Generate Random Whole Numbers within a Range-------------------------------
// function randomRange(myMin, myMax) {
//     let val = Math.random()
//     console.log(val);
//     return Math.floor(val * (myMax - myMin + 1)) + myMin;
// }
// console.log(randomRange(10 , 20));

// Use the parseInt Function
// function convertToInteger(str) {
//     const a = parseInt(str);
//     return a;
//   }
//   console.log(convertToInteger('708'));

// ----------------------------Use the parseInt Function with a Radix------------------------------------
// function convertToInteger(str) {
//     const a = parseInt(str, 2);
//     return a;
//   }
//   console.log(convertToInteger("1001"));

// function reverseString(str) {
//     let ans = "";
//     for(let i = str.length-1; i>=0; i--){
//       ans+=str[i];
//     }
//     return ans;
//   }
//   console.log(reverseString("hello"))

// function findLongestWordLength(str) {
//     var words = str.split(' ');
//     var longest=words[0].length;
//     for(var word of words ){
//         if((word).length>longest )
//         {
//             longest=(word).length;}
//             }return longest ;
//   }
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog."));


// Confirm the Ending

// function confirmEnding(str, target) {
//     let n = str.length;
//     return str.substring(n-target.length)===target;
//   }
//   console.log(confirmEnding("Bastian", "n"));


// function truncateString(str, num) {
//     let ans = "";
//     for(let i=0; i<num && i<str.length; i++){
//       ans+=str[i];
//     }
//     if(ans.length<str.length){
//         ans+="..."
//     }
//     return ans;
//   }
//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));

// function frankenSplice(arr1, arr2, n) {
//     for(let i=0; i<arr1.length; i++){
//       arr2.splice(n++, 0 ,arr1[i]);
//     }
//     return arr2;
//   }
  
//   console.log(frankenSplice([1, 2, 3], [4,5,6], 1));


// let arr = [1,2,3,4,5];
// let ans = arr.reduce((sum, val)=> sum+val , 0)
// console.log(`Sum is ${ans}`);




