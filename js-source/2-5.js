const http = require('http');
const logRequest = require('./logRequest');

const server = http.createServer((req, res) => {
  logRequest(req);
  res.setHeader('Set-Cookie', 'VISIT=TRUE');
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');
  if (req.headers.cookie) {
    // 쿠키가 있다는 것은 한 번 다녀간 적이 있는 사람
    res.write('<html><body>두 번째 이후 </body></html>\n');
  } else {
    res.write('<html><body>첫방문</body></html>\n');
  }
  res.end();
});

server.listen(18888);
console.log('start http listening :18888');
