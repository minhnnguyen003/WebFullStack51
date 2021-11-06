# 1. Middleware function trong express
- Trung gian giữa client và người dùng
- Giúp xử lí
- Sơ đồ: Request -> Middleware -> response
- khởi tạo Middleware
   ```javascript 
   //Middleware function
   var myLogger = function(req, res, next) {
      console.log("Middleware");
      next()
   }

   //Khai bao su dung Middleware
   app.use(myLogger)
   ```
   + req: request từ client
   + res: response trả lại cho client
   + next(): Chuyển sang middleware tiếp theo

   - Ví dụ: Tạo 1 middleware check tính hợp lệ của URL and Method (GET, POST, PUT, DELETE) của request
      + Khi truy cập vào: localhost:3000/admin -> Hiển thị bạn không phải admin, bạn không có quyền truy cập
   

# 2. các loại middlewre trong express
Phân thành 4 loại
- **Loại 1: Application-level Middleware**
   + Khai báo middleware bằng cách thêm nó vào các hàm như app.use(), app.GET(), app.POST(), app.PUT(), app.DELETE()

   ```javascript
    app.use((err, req, res, next) {
       console.log("Receive all request");
       next();
    });
    ```

*Nếu khai báo: app.use() như trong ví dụ trên thì tất cả các method đều phải đi qua middleware*

- **Loại 2: Router-level Midlleware**
   + phụ thuộc vào biến express.Router() thay vì app.use();

      ```javascript
      var app = express();
      var router = express.Router();

      router.use((err, req, res, next) {
         console.log("Middleware run");
         next();
      });

      router.get('/', (req, res) => {
         res.send('Hello user!');
      })
      ```

- **Loại 3: Error-handling Middleware**
   
   + *Thay vì truyền 3 tham số (req, res, next), thì ta Truyền 4 tham số, tham số đầu tiên (err) là biến nhận kết quả lỗi của middleware*
    
      ```javascript
         app.use((err, req, res, next) {
            console.error(err.stack)
            res.status(500).send('Somthing broke');
         });
      ```
- **Loại 4: Third-party middleware**
   
   + Ví dụ: <a href="https://npmjs.com/package/cookie-parser">https://npmjs.com/package/cookie-parser</a>

      ```Javascript
         
         var express = require('express');
         var app = express();
         var cookieParser = require('cookie-parser');

         // Load the cooking-parser middleware
 ,         app.use(cookieParser())
      ```