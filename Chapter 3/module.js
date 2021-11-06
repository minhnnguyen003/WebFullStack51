//show  module info

console.log(module);

// build-in module
//  + path-module
var path = require('path');
var filename = path.basename('/Users/TestPath/demo.js');
console.log(filename);

//  + OS Module
var os = require('os');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());

//  + queryString path
var queryString = require('querystring');
var query = queryString.parse('search=oto&year=2018&model=Audi');
console.log(query);

//  + http module
var http = require('http');
http.createServer((res, resp) => {
    resp.writeHead(200, {'Content-type': 'text/html'});
    resp.end('Hello World');
}).listen(8080);