var http = require('http');
var createModules = require('./createModules');

// console.log('Module duoc import');
// console.log(createModules);
// console.log('*****');
// console.log('Module hien tai');
// console.log(module);
// console.log('*****');

http.createServer((res, resp) => {
    console.log('Server dang lang nghe tren cong 8080');
    resp.writeHead(200, {'Content-type': 'text/html'});
    resp.write('Tuoi: ' + createModules.myAge + '<br />');
    resp.write('Duong dan file: ' + createModules.getDirName() + '<br />');
    resp.write('Thoi gian hien tai la: ' + createModules.getMyDateTime() + '<br />');
    resp.end('Hello World');
}).listen(8080);