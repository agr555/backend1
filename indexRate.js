/*console.log(1);
console.log(__dirname);
console.log(process); //argv[2] - аргументы и проч*/

/*
const fs=require('fs');
fs.readFile('./textRate.txt', (error,data) => {
    console.log(data.toString());
}) //https://nodejs.org/api/fs.html
// global !
*/

const getRates  = require('./rate'); // node - не указываем расширение .js!
console.log(getRates());