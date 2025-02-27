const fs = require('fs');
const path = require('path');
const express = require('express');
const { name } = require('ejs');
 
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');
}); 

app.get('/css', (request, response) => {
    let filePath = path.join(__dirname, 'style.css');
    response.sendFile(filePath);
}); 

app.post('/', (request, response) => {
    console.log("test zadosti");
    console.log(request.body);
    response.render('index', {name : request.body.name});
})


app.listen(5000)