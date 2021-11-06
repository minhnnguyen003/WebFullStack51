var authorModule = require('./example');

console.log('Using person class or module: ');
var person = new authorModule.Person('Nguyen Nhat Minh', 30);

person.showInfoAuthor();