//show  module info

console.log(module);

//build-in module
// + path-module
import { basename } from 'path';
var filename = basename('user');
console.log(filename);

// + os Module
var os = require('os');
console.log('Platform: ', os.platform());
console.log('Architecture: ', os.arch());

// + queryString path
var queryString = require('querystring');
var query = queryString.parse('search=oto')