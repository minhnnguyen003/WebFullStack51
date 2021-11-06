// exported variable
const AUTHOR = "Nguyen Nhat Minh";

// exported function
var sum = (a,b) => {
    return a + b;
}

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age;
    }

    showInfoAuthor() {
        console.log('name'+ this.name + 'age' + this.age);
    }
};

var authorInfo = {
    Person: Person,
    sum: sum,
    authorCopyRight: AUTHOR,
}

module.exports =  authorInfo;
