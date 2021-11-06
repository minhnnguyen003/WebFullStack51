# 1. Xử lí bất đồng bộ trong Javascript
- Xử lí đồng bộ    
    - Khi cần xử lí các tác vụ:
        - Đọc file
        - Query dữ liệu từ database
        - Gửi request lên server và nhận về dữ liệu
- IO Blocking
    - Là hiện tượng xảy ra với code đồng bộ khi ta thực hiện 1 task quá lâu
    - Các task sau phải đợi và browser không phản ứng lại các sự kiện trên UI
    - Dẫn đến lỗi ```Not Responding``` trên Windows hoặc treo trình duyệt
- Để khắc phục tình trạng chậm trên
    - Xử lí đa luồng
    - Xử lí bất đồng bộ
- Tuy nhiên JS hoạt động theo cơ chế single thread <đơn luồng>, task A chưa chạy xong, task B đã chạy
    - Giải đáp:
        - Callback
        - Promise
        - async - await
# 2. Callback 
- ### Khái niệm: Là kĩ thuật truyền 1 function vào 1 function khác để làm tham số
- Thứ tự chạy:
    - Hàm chính chạy trước (trừ phần gọi hàm callback)
    - Hàm chính kết thúc
    - Hàm callback được gọi
    - Hàm callback kết thúc

```javascript
function first() {
    console.log("Một");
}

function second() {
    console.log("Hai");
}

// execute function
first();
second();
```

- Output:

```
// Một
// Hai
```
Ví dụ 2: Thực hiện một đoạn code và trả về kết quả 

``` javascript
function first(){
    // Mô phỏng delay code
    setTimeout( function(){
        console.log("Một");
    }, 5000);
}
function second(){
    console.log("Hai");
}

first();
second();
```
- ### Vấn đề: Callback hell:
    - Khi thực hiện nhiều việc bất dồng bộ liên tiếp nhau
    - Những callback gọi lồng vào nhau, khó hiểu, khó debug
    - Ví dụ:

- Nhắc lại về HTTP Method
    - Get -> Lấy : Chỉ để lấy thông tin (Gửi các thông tin không Security)
    - Post -> Tạo dữ liệu trong db: Gửi lên các thông tin quan trọng
    - Put -> Cập nhật dữ liệu trong db -> Gửi lên các thông tin quan trọng
    - Delete -> Xóa dữ liệu trong db
- Một số thư viện hoặc hàm sử dụng API 
    - XhrHttpRequest
    - Fetch
    - Anxios
    - ...

# 3. Promise
![Mô hình Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)
- Để tránh callback hell thì ta dùng promise
- Cú pháp:

```javascript
let promise = new Promise(function(resolve, reject) {
    // Code here
});
```
Trong đó:
- Hàm được truyền vào ```new Promise``` dược gọi là **executor**
- Ban đầu, Promise có state là ```pending``` và kết quả ```value``` là ```undified```
- Khi executor kết thúc công việc, nó sẽ gọi đến 1 trong 2 hàm được truyền vào
    - resolve(value): để xác định rằng công việc đã thực hiện thành công
        - State chuyển thành fulfilled
        - Kết quả là value
    - reject(error): để xác định rằng đã có lỗi xảy ra
        - State chuyển thành rejected
        - Kết quả là error

- Vậy Promise có 3 trạng thái
    - Pending: promise đang chưa thực hiện xong
    - Full filled: trạng thái đã thực hiện xong, kết quả thành công
    - Rejected: trạng thái đã thực hiện xong, kết quả thất bại
- Ví dụ
- Các method của Promise
    - then()
        - Được gọi khi call API thành công
        - Nhận parameter
    - catch()
    - finally()
- Ví dụ trong thực tế khi sử dụng Promise trong bất đồng bộ call API
- Promise all
    - Gộp nhiều API vào chạy cùng 1 lúc
    - Sử dụng nhiều trong việc call các API để lấy dữ liệu tổng hợp
    - Sử dụng trong việc gửi email hàng loạt
# 4. await - async
- Async/await
# 5. Tự đọc thêm
- ### Scope trong Javascript
- ### Clouse
- ### Hoisting 
- ### Higher order function