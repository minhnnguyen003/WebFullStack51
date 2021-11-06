- Sử dụng node, express + mongoDB -> Tạo API -> Dùng React sử dụng
- Sử dụng node, express + mongoDB -> Tạo website trực tiếp


# 1. Nodemon
- Modified mà k cần phải restart server
- Loại: Hot-loader -> React, ReactNative, VueJS, Angular
# 2. Request & Response trong Express


- res.render
    - Phương thức này sẽ phản hồi nội dung của HTML rong file chỉ định
    - Nếu kết hệp Express với các framework engine khác thì 

- res.end
    - Gửi xong
    - Chấm dứt liên kết giữa client và server

# 3. Routing & URL
- Quy định các địa chỉ trả về cho client (file static)
- Điều hướng

## app.get(path, handler)
- Path: Đường dẫn đến URL mà bạn muốn cho người khác truy cập
- Handler: ```Callback``` sẽ xử lí yêu cầu truy cập này

## Handler app.post(path, handler)
curl -X POST "http://localhost:3000/hello"

## Config ngắn gọn Router trong dự án

## Url 

### Static URL

```Javascript
var express = require('express');
var app = express();

app.get('/admin', (req, res) => {
    res.send("AdminPage");
});
app.listen(3000);
```

### Dynamic URL
- Route parameters

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: {"userId": "34", "bookId": 8989}
```

```Javascript
// Get Param
app.get('/users/:userId/:bookId', (req, res) => {
    res.send(req.params)
})
```

# 4. Handling With Form
- Sử dụng 1 vài package sau:
    - Expressjs: framework của Nodejs for create http request
    - body-parse:
    - Pug, Ejs (Template) (không bắt buộc)

Demo: Xử lí với form
- Tạo form
- Khi click chuyển sang trang xử lí 

form.pug (action, method, enctype)



**BTVN** Xây dựng giỏ hàng từ NodeJS


```pug
html
head
    title Form
    meta(http-equiv="Content-Type", content="text/html;charset=UTF-8")
    link(href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", rel="stylesheet")
body
    div.container
        .card(style = "margin-top: 5%;")
            h3.card-header Xử lý Form
            .card-body
                form(action="/", method="post", enctype="multipart/form-data")
                    .form-group
                        label(for="name") Họ và tên
```
