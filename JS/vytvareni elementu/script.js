let container = document.getElementById("container");
let input = document.createElement('input');
input.value = "tlacitko";
input.type = "button";
 
container.append(input);

let table = document.createElement('table');
/*
let row = table.insertRow()

let cell = row.insertCell();

cell.innerText = 1;
cell = row.insertCell();
cell.innerText = 2;
cell = row.insertCell();
cell.innerText = 3;
cell = row.insertCell();

row = table.insertRow();
cell = row.insertCell();
cell.innerText = 4;
cell = row.insertCell();
cell.innerText = 5;
cell = row.insertCell();
cell.innerText = 6;
cell = row.insertCell();

row = table.insertRow();
cell = row.insertCell();
cell.innerText = 7;
cell = row.insertCell();
cell.innerText = 8;
cell = row.insertCell();
cell.innerText = 9;
cell = row.insertCell(); 
*/


for (let i = 1; i <= 100; i++) {
    if ((i - 1) % 10 === 0) {
        var row = table.insertRow();
    }
 
    let cell = row.insertCell();
    cell.innerText = i;
}

document.body.append(table);