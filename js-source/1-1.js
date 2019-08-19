const http = require('http');
const logRequest = require('./logRequest');

const server = http.createServer((req, res) => {
  logRequest(req);
  res.write('<html><body>hello</body></html>\n');
  res.end();
});

server.listen(18888);
console.log('start http listening :18888');
