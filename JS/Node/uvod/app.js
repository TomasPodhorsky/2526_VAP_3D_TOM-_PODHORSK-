const writeText = require("./script.js"); // require nacte neco z potomku asi, require nacita hodnoty z jineho scriptu
const path = require('path'); //nacitani modulu
const fs = require('fs');

/* const data = fs.readFileSync('script.js', 'utf-8'); //readFileSync vrati co je v souboru
writeText(data); // toString z bytu na text nebo 'utf-8' */
/*
fs.readFile(path.join(__dirname, 'script.js'), 'utf-8', (err, data) => {
    if(err) writeText(err);
    else writeText(data) 
    if (!err) {
        const json = JSON.parse(data)
        fs.readFile(path.join(__dirname, json.dir, json.files[0]), 'utf-8', (err, data) => {
            if(!err){
                writeText(Data)
            }
        })
        
    }
})*/
/*
async function loadData(){
    try{
        const jsonData = await fs.promises.readFile(path.join(__dirname, 'main.json'), 'utf-8')
        const json = JSON.parse(jsonData)
        const file1Data = await fs.promises.readFile(path.join(__dirname, json.dir, json.writeData[0]), 'utf-8')
        writeText(file1Data)
    } catch (err){
        console.log(err);
    }
    
}
*/
async function writeData(path, data){
    try{
        let res = await fs.promises.writeFile(path, data)
    }catch(err){
        console.log(err);
    }
}
/*
writeData(
    path.join(__dirname, 'files', 'files3.txt'), // ke slozce files vytvori files3.txt a ulozi Ahoj!
    'Ahoj!'
)

loadData()
writeText('Hello World') //cekat bude na konci, nebude na zacatku
*/

async function loadAndWriteData(){
    try{
        const jsonData = await fs.promises.readFile(path.join(__dirname, 'main.json'), 'utf-8')
        const json = JSON.parse(jsonData)
        for (let i = 0; i < json.writeFiles.length; i++) {
            writeData(
                path.join(__dirname, json.dir, json.writeFiles[i]),
                json.writeData[i]
            )
            
        }
       
    } catch (err){
        console.log(err);
    }
}

loadAndWriteData()