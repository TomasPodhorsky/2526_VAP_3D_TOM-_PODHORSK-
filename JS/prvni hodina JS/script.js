let div1 = document.getElementById("div1");
div1.innerText = 1;
let div2 = document.getElementById("div2");
div2.innerText = 2;
let div3 = document.getElementById("div3");
div3.innerText = 3;
let div4 = document.getElementById("div4");
div4.innerText = 4;
let div5 = document.getElementById("div5");
div5.innerText = 5;


let divs = document.getElementsByClassName("cerveny_div")
for (let i = 0; i < divs.length; i++) {
   const div = divs[i];
   div.style.setProperty("width", "300px")
   div.style.setProperty("height", "300px")
}
let divs2 = document.getElementsByClassName("modry_div")
for (let i = 0; i < divs2.length; i++) {
   const div = divs2[i];
   div.style.setProperty("width", "200px")
   div.style.setProperty("height", "200px")
}

