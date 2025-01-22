let tlacitko = document.getElementsByTagName("input")[0];


tlacitko.onclick = kliknutiNaTlacitko;
tlacitko.onclick = kliknutiNaTlacitko2;

tlacitko.addEventListener("click", kliknutiNaTlacitko)
tlacitko.addEventListener("click", kliknutiNaTlacitko2)


let pocetKliknuti = 0;
let pocetKliknuti2 = 0;

function kliknutiNaTlacitko(event){
    alert(++pocetKliknuti);
    console.log(event);

}

function kliknutiNaTlacitko2(){
    pocetKliknuti2 +=2
    console.log(pocetKliknuti2);
}

let div = document.getElementsByTagName("div")[0];
 div.addEventListener('mousemove', (event) => {
    div.style.left = (event.clientX - 50) + 'px'
    div.style.top = (event.clientY - 50) + 'px'
    } )