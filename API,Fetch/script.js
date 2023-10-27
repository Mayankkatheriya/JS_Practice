let image = document.querySelector("#random-img");
let btn = document.querySelector("button");
let loading = document.querySelector("p");
async function startImg() {
  let data = await fetch("https://dog.ceo/api/breeds/image/random");
  // console.log(data);
  let res = await data.json();
  // console.log(res);
  image.src = res.message;
}
startImg();
function changeImg() {
  loading.style.display = "block";
  image.style.display = "none";
  setTimeout(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        // console.log(res);
        image.src = res.message;
        loading.style.display = "none";
        image.style.display = "block";
      })
      .catch((error) => {
        alert("image not found");
      });
  }, 1000);
}
btn.addEventListener("click", changeImg);
