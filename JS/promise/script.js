function wait(time) {
    return new Promise(
        (resolve, reject) => {
            if(time < 0) {
                reject('Nelze čekat záporný čas');
            } else {
                setTimeout(() => {
                    console.log('Čekání skončilo');
                    resolve();
                }, time);
            }
        })
}

function wait2(time){
    let currentTime = performance.now()
    while(performance.now() < currentTime + time)
    console.log("cekani skoncilo");
}
 
let time = 10000;
wait(time)
console.log('Čekám ' + time / 1000 + ' sekund');
time = 0
console.log("Nová hodnota času: " + time);

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")
document.body.appendChild(canvas)
canvas.width = 800;
canvas.height = 600;
const image = new Image();

function loadImage(path){
    return new Promise(
        (resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject('nepodarilo se nacist obrazek')
            image.src = path;
        }
    )
    }

    async function draw(){
        let image1 = await loadImage('obrazek.jpg');
        ctx.drawImage(image1, 0 , 0);
    }
    draw();