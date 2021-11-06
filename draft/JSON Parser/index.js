const open = require('open');
const fs = require('fs'); // file system
const http = require('http');
const port = 3000;
let output;

try
{
    let data = fs.readFileSync('./data.json', 'utf-8');
    output = JSON.parse(data);
    
}
catch (err)
{
    console.log(err)
}




http.createServer((req, res) => {
    res.send(String(output));
    console.log(`Server dang lang nghe tren cong ${port}`)
    res.writeHead(200, {'Content-type': 'text/html'});
    // res.write(output);
    res.end('Hello World');
}).listen(port)

open(`http://localhost:${3000}`, {app: {name: 'msedge'}});

