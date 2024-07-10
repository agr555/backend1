const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/contact.html');
})
app.get('/index2', function (req, res) {
    res.sendFile(__dirname + '/views/index2.html');
})

app.listen(process.argv[2], () =>{
    console.log('Server started!');
})
//для сравнения или fs / express!!!

//в package.json + "start": "nodemon server.js 3000"
/*//    "start": "nodemon index.js 3000"*/

