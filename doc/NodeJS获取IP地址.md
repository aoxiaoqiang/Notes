NodeJS中获取IP地址

```javascript
/**
 * 获取本地IP地址
 */
function getIPAdress() {
  const interfaces = require('os').networkInterfaces()
  let outIP = null;
  Object.keys(interfaces).forEach(key => {
    interfaces[key].map((alias) => {
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        outIP = alias.address
      }
    })
  })
  if (!outIP) {
    outIP = '127.0.0.1';
  }
  return outIP;
}

```