//let btn = document.querySelector("#btn");
//btn.onclick = (evt) => {
//    console.log("evt");
 //   console.log(evt.type);
 //   console.log(evt.target);
 //   console.log(evt.clientX, evt.clientY);
//}

//let div = document.querySelector("div");
//div.onmouseover = () => {
//    console.log("You inside a div");
//}

let btn = document.querySelector("#btn");

//btn.addEventListener("mouseover", () =>{
//console.log("button was clicked");
//});

btn.addEventListener("click", () =>{
console.log("button was clicked 1");
});

btn.addEventListener("click", () =>{
console.log("button was clicked 2");
});

btn.removeEventListener("click", () =>{
console.log("button was clicked 3");
});

btn.addEventListener("click", () =>{
console.log("button was clicked 4");
});




