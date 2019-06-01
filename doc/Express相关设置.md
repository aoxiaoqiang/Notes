Express 相关设置

```javascript
const express = require('express');
const app = express();
const ejs = require('ejs');

// 视图引擎设置为`ejs`, 文件后缀为`.html`
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');


// favicon设置
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// 静态资源目录设置
app.use(express.static(path.join(__dirname, 'public')));
```
