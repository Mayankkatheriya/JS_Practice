// let head = document.getElementsByClassName("heading1");
let head = window.document.getElementById("myId");
console.log(head);


//**D/f b/w NodeLIST And HTML Collections */
// *?let a= document.getElementsByClassName("heading1");
// *?console.log(a);
// *?console.log(a.myId);

// *?let b = document.querySelectorAll("h1");
// *?console.log(b);
// *?console.log(b[0]);
// !console.log(ba.myId);

let mydiv = document.getElementById("mydiv");
console.log(mydiv);

mydiv.addEventListener("click", function(eventObject){
    console.log(eventObject.timeStamp)
    console.log("event is triggered");
})
console.log(mydiv.innerText);
console.log(mydiv.textContent);
console.log(mydiv.innerHTML)
console.log(mydiv)

// Example: Creating and adding a new element
// var newDiv = document.createElement("div");
// newDiv.textContent = "Newly added div";
// document.body.appendChild(newDiv);

// Example: Removing an element
// var elementToRemove = document.getElementById("div");
// elementToRemove.remove();

//*PreventDefault
let link = document.getElementById("link");
link.addEventListener('click', (event)=>{
    event.preventDefault();
    alert("Prevent through external Js")
})