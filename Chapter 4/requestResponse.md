# 1. Request là gì
- Request Object trong Express.js cho phép bạn kểm tra mọi khía cạnh về yêu cầu mà người dùng gửi đến server (dùng trình duyệt, URL trình duyệt,...)

- Trong Request object bao gồm rất nhiều tưhs như (url, method, form data, header,...)

- Khi khởi tạo một route + người dùng truy cập đồng nghĩa với việc người dùng đã gửi cho ứng dụng Express một Request

Ví dụ:
Khi người dùng đăng nhập, request object lúc này bao gồm dữ liệu (email, mk,...)

```
app.get('/login', (req, res) => {
    //Lấy username và password từ request của người dùng
    let {username, password} = req.param
});
```

- <b>Request object là tham số req trong callback fundtion của route.</b>
1. req.app: Giữ tham chiếu đến middleware
2. req.baseurrl: Hiện thị đường dẫn cụ thể đến route được chỉ định
*3. req.body: Nó chứa key - value dữ liệu được gửi đến bởi client. Mặc định, nó có giá trị là undiefiened, và thường được gán !*
4. req.cookies: Chứa các giá trị của cookies mà người dùng gửi đến, khi ta sử dụng middle cookiep-parse thì thuộc tính !
5. req.hostname: Chứa giá trị của host trong header
6. req.ip: Chứa địa chỉ IP của người dùng khi request
7. req.íp: Khi cài đặt proxy tin cậy (trusted proxy???) được bật, thuộc tính này chứa một mảng các ip cụ thể
8. req.originalurl: Cũng giống như req.url, nhưng nó chứa nguyên url của request, cho phép bạn có thể sửa đổi req.url mộ !
*9. req.params: Một object chứa các thuộc tính cho việc định danh route. Ví dụ bạn có một route là ```/posts/:postID``` khi truy cập vào !*
10. req.path: Path của URL
11. req.protocol: Một chuỗi chứa request protocol, 'http' hoặc 'https' khi request với TLS
*12. req.query: Một object chứa các parameter của route (VD: localhost:8080/user?name=nhatminh&laptrinh=cpp)*
*13. req.route: Một chuỗi chứa route hiện tại*
14. req.secure: Trả về kiểu boolean có giá trị true nếu kết nối TLS được kích hoạt
15. req.signedcookies: khi sử dụng midddleware hỗ trợ việc sign cookie, thuộc tính này chứa cookie đã sign theo yêu cầu, chưa sign !
16. req.subdomains: Trả về một mảng giá trị của subdomain trong domain chính
17. req.xhr: Trả về kiểu boolean là true nếu trường tiêu đề "x-request-with" của yêu cầu là "xmlhttprequest"

Các thuộc tính thường dùng
- Lấy đât client gửi đến: req.params, req.query, req.body

    ```JavaScript
    req.params
    // GET https:example.com/user/123
    app.get('/user/:userid', (req,res) => {
        console.log(req.params.userid); // "123"
    });
    ```

    <!-- Khi có dấu & (Google hoặc web có chứ năng tìm kiếm) -->
    ```JavaScript
    req.query
    // GET https:example.com/user?userID=123&action=changeProfile
    app.get('/user/:userid', (req,res) => {
        console.log(req.query.userID); // "123";
        console.log(req.query.action); // "changeProfile"
    });
    ```

    ```JavaScript
    req.body
    // POST https:example.com/login {username: 'admin', password: '1234'}
    app.post('/login', (req,res) => {
        console.log(req.body.username); // "123";
        console.log(req.body.password); //"1234"
    });
    ```
- Lấy data của URL

    ```JavaScript
    
    // https:example.com/search?keyword=nodejs
    app.get('/search', (req,res) => {
        console.log(req.protocol); //"https"
        console.log(req.hostname); //"example.net"
        console.log(req.path); // "/search"
        console.log(req.originalUrl); // "/keyword=nodejs"
        console.log(req.subdomains); // "['']"
    });
    ```

- Lấy giá trị của header

    ```JavaScript
    
    // https:example.com/search?keyword=nodejs
    app.post('/search', (req,res) => {
        req.header('Content-type') //"application/json"
        req.header('Content-Length') // "75"
        req.header('user-agent') //"Mozilla/5.0 (X11)..."
        req.header('Authorization') //"Bearer..."
    });
    ```
- Lấy giá trị của Cookies

    ``` Javascript
    app.post('/login', (req, res) => {
        req.cookies.isShowPopUp; //true
        req.cookies.sessionID; //<span style="...">
    });
    ```
# 2. Response là gì?

- Cung cấp một cách thức đơn giản để phản hồi các yêu cầu HTTP/trả về cho client
- ```res.send```: Để trả lời các yêu cầu HTTP với tất cả các loại dữ liệu

    ```Javascript
    app.get('/', (req, res) => {
        res.json({web: ['examples', ...]})
    });
    ```

- res.status: Chỉ định mã phản hồi HTTP, status thể hiện trạng thái của phản hồi

    ```Javascript
        app.get('/', (req, res) => {
            res.status(302);
    });
    ```
```
1xx: Thông Thôngtin
2xx: Thành Công
3xx: Chuyển hướng
4xx: Lỗi client
5xx: Lỗi server
```

- res.redirect
    ```Javascript
    res.redirect('/login');
    res.redirect('https://example.net');
    ```

- res.render
    + Phương thức này sẽ phản hồi nội dung của HTML trong file chỉ định về clients
    + Nếu kết hợp Express với template engine như EJS, Pug, ...

    ```Javascript
    app.get('/home', (req, res) => {
        res.render('home.html', {name: 'nguyentri'})
    })
    ```
- res.end: Kết thúc phán hồi đến clients
    ```Javascript
    app.get('/home', (req, res) => {
        res.send('123');
        res.end();
    });
    ```