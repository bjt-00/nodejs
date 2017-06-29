/**
 * @Author: Abdul Kareem
 * @Email:  abdulkareem.bitguiders@gmail.com
 * http://localhost:8080/?p1=param1&p2=param2
 */


var http = require('http');//include a module
var url = require('url');

var myFirstModule = require('./MyFirstModule.js');
var fh = require('./MyFileHandler.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write("req.url = "+req.url+"<br>");
    var q = url.parse(req.url, true).query;
     if(q.s=='f'){
    	 res.write(fh.handleFile(q.a)+"<br>");
     }else{
    	 res.write(myFirstModule.info());
     }
    	
    res.end();
    //res.end();
}).listen(8080); 