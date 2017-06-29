/**
 * 
 */
var http = require('http');//include a module
var myFirstModule = require('./MyFirstModule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Welcome <br>');
    res.end(myFirstModule.message('bitguiders'));
    //res.end();
}).listen(8080); 