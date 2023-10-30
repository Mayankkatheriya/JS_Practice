//TODO---------LOCAL STORAGE--------------
let localLikes = document.querySelector(".local")
if(localStorage.getItem("likes")){
    localLikes.innerText = JSON.parse(localStorage.getItem("likes"))
}
function incrementLocalLike(){
    if(localStorage.getItem("likes")){
        likes = JSON.parse(localStorage.getItem("likes"));
        likes++;
        localStorage.setItem('likes',JSON.stringify(likes));
    }else {
        likes=0;
        localStorage.setItem('likes',JSON.stringify(likes))
    }
    localLikes.innerText = JSON.parse(localStorage.getItem("likes"))
}

//TODO---------Session STORAGE--------------
let sessionLikes = document.querySelector(".session")
if(sessionStorage.getItem("likes")){
    sessionLikes.innerText = JSON.parse(sessionStorage.getItem("likes"))
}
function incrementSessionLike(){
    if(sessionStorage.getItem("likes")){
        likes = JSON.parse(sessionStorage.getItem("likes"));
        likes++;
        sessionStorage.setItem('likes',JSON.stringify(likes));
    }else {
        likes=0;
        sessionStorage.setItem('likes',JSON.stringify(likes))
    }
    sessionLikes.innerText = JSON.parse(sessionStorage.getItem("likes"))
}