let ball = document.getElementById("ball");
document.addEventListener("keydown", moveball);
let topPosition = 0;
let leftPosition = 0;
function moveball(e) {
    // console.log(e);
    let pageHeight = document.documentElement.clientHeight;
    let pageWidth = document.documentElement.clientWidth;
    // console.log(pageHeight);
    // console.log(pageWidth);
    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight;

    //move top
    if (e.keyCode == "38" || e.keyCode == "87") {
        if(topPosition-20>=0){
            ball.style.top = topPosition-20+"px";
            topPosition-=20;
        }
    }
    //move right
    else if(e.keyCode == "39" || e.keyCode == "68" ){
        if(leftPosition+ballWidth+20<=pageWidth){
            ball.style.left = leftPosition+20+"px";
            leftPosition+=20;
        }
    }
    //move down
    else if(e.keyCode == "40" || e.keyCode == "83"){
        if(topPosition+ballHeight+20<=pageHeight){
            ball.style.top = topPosition+20+"px";
            topPosition+=20;
        }
    }
    //move left
    else if(e.keyCode == "37" || e.keyCode == "65"){
        if(leftPosition-20>=0){
            ball.style.left = leftPosition-20+"px";
            leftPosition-=20;
        }
    }

}
