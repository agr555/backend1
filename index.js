/* //создание веб-сервера
const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"}); //кодировка. М. ее передать отдельноsetHeader
    res.end('Hello!  Привет!');

})
// server.listen(3000, () => {
server.listen(process.argv[2], () => {
    console.log('Server started!');
})
*/

/*console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);*/

//http://localhost:3000/  тут смотреть результат
const http = require('http'); //реьд
const fs = require('fs');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); //"text/html  для того, чтобы отдать именно html. Для открытия стр
    let file = 'index';
    //Если нужно разные странички: url - это чать запроса, которая идет после host
    switch (req.url) {
        case '/about':
            // res.write('<h1>about page</h1>');
           file = 'about';
            break;
        case '/contact':
            // res.write('<h1>contact page</h1>');
            file = 'contact';
            break;
        case '/index2':
            // res.write('<h1>about page</h1>');
            file = 'index2';
                break;

    }
    fs.readFile('./views/' + file + '.html', 'utf8', (err, data) => {
        //прочитать в кодировке файл html  в зависимости, от того какой он
        res.write(data); // записать в дата
        res.end(); //завершать запрос именно тут, тк ф-я асинхронная
    });
    //res.end(); //не тут, тк она вызовется раньше, чем произойдет коллбек
})

// server.listen(process.argv[2], () => {
server.listen(3000, () => {
    console.log('Server started!');
})
//////////////////////
//повтор//
/*//    "start": "nodemon index.js 3000"*/
// console.log(__dirname); //D:\ProjectWebStorm\JS\backend_1_begin
// console.log(process);

//   Как прочитать файл?
fs.readFile('./npm2.txt', (error, data) =>{
    console.log(data.toString())
}); // текущее местоположение обозначить так ./  т.е.  ./имя файла
/// почитать документацию https://nodejs.org/api/fs.html#filehandlereadfileoptions



const getRates = require('./rate'); // по этому же пути лежит rate.js
console.log(getRates()) // dsd
