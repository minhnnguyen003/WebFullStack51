// 1. Arrow function 

var number = [1,2,3,4,5,6,7,8,9,10];

//Tìm số lẻ
//Cách viết cũ
var odd = number.filter(function(n) { return n % 2 == 1});
console.log(odd);

function add(n) {
    return n % 2 == 1
}


// 2. Destructing
var foo = ['one', 'two', 'three']

//old way
var one = foo[0];
var two = foo[1];
var three = foo[2];

//destructing way
var [one, two, three] = foo;


// 3. Default parameter
//old method
function multiply(a, b) {

}

// 4. Class hỗ trợ constuctor, get set
class animal {
    constructor(name) {
        this.name = name;
    };

    run() {
        //handle
    };

    speak() {
        //handle
    };
}