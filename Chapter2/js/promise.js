const promisePending = new Promise((resolve, reject) => {

});
console.log("Trang thai promise ban dau: ", promisePending);

//khi call resolve() -> trang thai la fulfilled
const promiseFulfilled = new Promise((resolve, reject) => {
    resolve();
});
console.log("Trang thai Promise khi call resolve: ", promiseFulfilled);

const promiseResolve = new Promise((resolve, reject) => {
    resolve(123);
});
console.log(promiseResolve);

// khi call reject() -> trang thai la reject
const promiseReject = new Promise((resolve, reject) => {
    reject("Loi");
});
console.log("Trang thai Promise khi call reject: ", promiseReject);

const promiseReject2 = new Promise((resolve, reject) => {
    reject("Da xay ra loi khi connect toi db")
});

console.log("Trang thai Promise khi call reject: ", promiseReject2)

// Using promise with method
const promiseMethod = new Promise((resolve, reject) => {
    resolve();
})
promiseMethod
    .then(() => {
        console.log('Trang thai thanh cong duoc goi');
    })
    .catch(() => {
        console.log('Trang thai error duoc goi');
    })
    .finally(() => {
        console.log('Trang thai thanh cong + that bai');
    });

//Using promise with method with value
const promiseMethodWithValue = new Promise((resolve, reject) => {
    const arrayCourse = [
        {
            'CourseName': 'Lap trinh javascript',
            'Price': '20',
            'Author': 'Nguyen Tuan Anh'
        }
    ];
    resolve(arrayCourse);
});
promiseMethodWithValue
    .then((valueCourse) => {
        console.log('promiseMethodwithValue: ', valueCourse);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finish calling API");
    })

// Muốn lấy dữ liệu từ API mà sử dụng promise thì sử dụng như thế nào
// Bước 1: tạo 1 promise để call url
// Bước 2: Định nghĩa cả resolve và reject
// Bước 3: Định nghĩa các hàm then, catch và finally.
