//Cach 1: Object literal

var person = {
    firstName: 'Anh',
    lastName: 'Nguyen Tuan',
    showName: function() {
        console.log(this.firstName + this.lastName);
    },
    30: 'Age',
}

// Cach 2: Object constructor
var psn = new Object()
psn.firstName = 'Anh';
psn.lastName = 'Nguyen Tuan',
psn.showName = function() {
    console.log(this.firstName + this.lastName)
}

// Một số tip làm việc với object
// 1. Truy xuất vào các field (key, function)

console.log(person.firstName);
console.log(person['firstName']);

// console.log(person.30); //error
console.log(person['30']); //ok

// 2. Duyệt từng phần tử trong object
for(var ps in person) {
    console.log(ps);
}

// 3. Xóa, thêm phần tử trong object
delete person.firstName;
person.sex = 'male';

// Chuỗi JSON --> Dạng key - value
// Mông DB --> key - value
// convert object --> JSON --> Javascript đọc và hiển thị cùng html
// Serialize và Deserialize
// Serialize
JSON.stringify(person);
var jsonVariable = '{"firstName": "Anh", "lastName": "Nguyen Tuan", "sex": "male"}'

//Convert JSON to JS

//Propotype --> extend --> Kế thừa thuộc tính và phương thức
//Es6 -> extends -> class, extend
// convert ES6 về ES5