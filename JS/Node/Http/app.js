const fs = require('fs')
const path = require('path')
const http = require('http')
 
const server = http.createServer(async(request, response) => {
    if (request.url === '/') {
        let filePath = path.join(__dirname, 'index.html');
        sendFile(response, filePath)
    } else if (request.url === '/css') {
        console.log("dwadaw")
        let filePath = path.join(__dirname, 'style.css');
        sendFile(response, filePath)
    }
    else if (request.url) {
        let filePath = path.join(__dirname, request.url);
        sendFile(response, filePath)
    }
})
 
async function sendFile(response, filePath){
    try {
        let file = await fs.promises.readFile(filePath, 'utf8');
        response.end(file);
    } catch(err){
        response.writeHeader(404);
        response.end('File not found');
    }
}
 
server.listen(4000)