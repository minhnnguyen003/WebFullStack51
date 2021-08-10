- Sử dụng node, express + mongoDB -> Tạo API -> React sử dụng
- Sử dụng node, express + mongoDB -> Tạo website trực tiếp


# 1. Nodemon
- Modified mà k cần phải restart server
- Loại: Hot-loader
# 2. Request & Response trong Express

## Request
- Request Object trong Expressjs cho phép bạn kiểm tra mọi khía cạnh về yêu cầu mà người dùng (client) gửi đến server

- Trong Request Object 

- Lấy giá trị của URL
- Lấy giá trị của 

## Response

- res.status: Chỉ định mã phản hồi HTTP, status thể hiện tình trạng

```
1xx: Lỗi thông tin
2xx:
3xx:
4xx: Lỗi ở client
5xx: Lỗi ở server
```

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

- Route parameters

``` javascript
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: {"userId": "34", "bookId": 8989}
```


# 4. Handling With Form
- Sử dụng 1 vài package sau:
    - Expressjs: framework của Nodejs for create http request
    - body-parse:
    - Pug (Template), Ejs

form.pug (action, method, enctype)


# 5. Middleware

**BTVN** Xây dựng giỏ hàng từ NodeJS


```javascript
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