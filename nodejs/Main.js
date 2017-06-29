/**
 * 
 */
var http = require('http');//include a module
var url = require('url');
var myFirstModule = require('./MyFirstModule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write("req.url = "+req.url+"<br>");
    var q = url.parse(req.url, true).query;
    var txt = q.p1 + " " + q.p2;
    res.write("var q = url.parse(req.url, true).query = "+txt+"<br>");
    
    res.end(myFirstModule.message('bitguiders'));
    //res.end();
}).listen(8080); 