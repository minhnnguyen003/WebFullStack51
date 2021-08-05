var http = require('http');
var createModules = require('./createModules');

console.log('====== Module dang duoc import =======');
console.log('createModules');

console.log('====== Module hientai =======');
console.log(module);

http.createServer(function(request, response) {
    console.log('Server hien dang lang nghe tren cong 8080');
    response.writeHead(200, {content})
})