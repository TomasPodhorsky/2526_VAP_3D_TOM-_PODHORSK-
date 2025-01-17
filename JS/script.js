function kliknuti() {
    let textInput = document.getElementById('Textarea').value;
    let selectLevel = document.getElementById('Selectarea').value;
    let colorInput = document.getElementById('Colorarea').value;

    
    if (textInput.trim() !== "") {
        const heading = document.createElement(`h${selectLevel}`);
        heading.textContent = textInput;
        heading.style.color = colorInput;

        
        const resultDiv = document.getElementById('result');
        resultDiv.appendChild(heading);
    } else {
        alert("Prosím zadejte text pro nadpis.");
    }
}