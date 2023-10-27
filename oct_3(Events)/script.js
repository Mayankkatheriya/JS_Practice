console.log("Hello World");

//*Mouse Event
let btn = document.getElementsByTagName("button");
btn[0].addEventListener('click', function(event){
    console.log("1", event.clientX)
});


//*keyboard Event
//!keypess
let inputTag = document.getElementById("input1");
inputTag.addEventListener("keypress", function(event){
    console.log("key is pressed");
    // console.log("key is pressed", event.keyCode)
})

//!keydown(works first)
inputTag.addEventListener("keydown", function(event){
    console.log("key is down", event.repeat);
})


//!keyup
inputTag.addEventListener("keyup", function(event){
    console.log("key is up");
})


//*Bubbling(inner to outer)

// let grandfather = document.getElementById("grandfather");
// let father = document.getElementById("father");
// let son = document.getElementById("son");
// grandfather.addEventListener('click', (e)=>{
//     alert("grandfather");
// })
// father.addEventListener('click', (e)=>{
//     alert("father");
// })
// son.addEventListener('click', (e)=>{
//     alert("son");
// })


//*capturing by giving third argument(outer to inner)
//! By-defaut value to this third argument in addEventListener is false

// let grandfather = document.getElementById("grandfather");
// let father = document.getElementById("father");
// let son = document.getElementById("son");
// grandfather.addEventListener('click', (e)=>{
//     alert("grandfather");
// }, true)
// father.addEventListener('click', (e)=>{
//     alert("father");
// }, true)
// son.addEventListener('click', (e)=>{
//     alert("son");
// }, true)


//*for stoping this propagation use .stopPropogation

let grandfather = document.getElementById("grandfather");
let father = document.getElementById("father");
let son = document.getElementById("son");
grandfather.addEventListener('click', (e)=>{
    e.stopPropagation();
    alert("grandfather");
})
father.addEventListener('click', (e)=>{
    e.stopPropagation();
    alert("father");
})
son.addEventListener('click', (e)=>{
    e.stopPropagation();
    alert("son");
})

//*Event deligation

let myList = document.getElementById("list");
// console.log(myList);
myList.addEventListener("click" , (e)=>{
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
    // console.log(e.target.nodeName);
    if(e.target.nodeName==='LI'){
        console.log(e.target.outerText);
    }
});


//*Strict mode in js
//? if you use strict\, it will give you error
// function print(){
// "use strict";
//      a=10
//     console.log(a);
// }
// print();