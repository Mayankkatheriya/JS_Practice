document.getElementById("main-heading").style.color = 'brown';


//!creating an Element and append
let div1 = document.createElement("div");
// console.log(div1);

div1.style.width = "300px";
div1.style.height = "300px";
div1.style.color = "orange";
div1.style.backgroundColor = "yellow";
div1.style.fontSize = "30px";
div1.innerHTML = `<h2>Made by JS</h2>
                  <p>Hello</p>
                  <p>use back tick to write code like this</p>`;
// //!Add Id to this element created
div1.id = "firstDivCreated"
// *div1.setAttribute("id", "firstDivCreated")
document.body.appendChild(div1);

//!creating an element with function
let menu = document.querySelector('.menu');
menu.style.listStyle = "none";
menu.style.display = "flex"
menu.style.gap = "4rem"
menu.style.justifyContent = "space-between"
menu.style.alignItems = "center"

let creatMenu = (name)=>{
    let li = document.createElement('li');
    li.innerHTML = `<a href="#">${name}</a>`;
    // console.log(li);
    // *console.log(li.childNodes[0]);
    // *li.childNodes[0].style.textDecoration = "none"

    // //!Add class to each element created
    li.classList.add("subList")

    return li;
}
menu.appendChild(creatMenu("Contact"));
menu.appendChild(creatMenu("About Us"))
menu.appendChild(creatMenu("Projects"));
menu.appendChild(creatMenu("Location"));
menu.appendChild(creatMenu("Reviews"));

//! to insert element beween the HTML Page
let div2 = document.createElement("div");
div2.style.width = "600px";
div2.style.height = "300px";
div2.style.color = "red";
div2.style.backgroundColor = "cyan";
div2.style.fontSize = "24px";
div2.innerHTML = `<h2>Second Div created and insert between HTML page before menu</h2>`;
document.body.insertBefore(div2, menu);

//!remove an Element
let parent = document.getElementById("parent");
// console.log(parent);
let child = document.getElementById("child");
// console.log(child);
parent.removeChild(child);
// console.log(parent);


//*Custom Attribute(DOM stringMap)
//! use of datset
function filterList(){
    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);
    let nameList = document.querySelectorAll("#myList li")
    console.log(nameList);
    nameList.forEach((item)=>{
        console.log(item);
        console.log(item.dataset);
         console.log(item.dataset.gender);
        if(item.dataset.gender===gender){
            item.style.display = "block"
        }
        else{
            item.style.display ="none";
        }
    })
}
