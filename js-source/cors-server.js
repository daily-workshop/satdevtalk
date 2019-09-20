const http = require('http');

// get-test 1. cors를 허용하지 않는 서버
const server = http.createServer((req, res) => {
  res.write('hello');
  res.end();
});

// get-test 2. cors를 허용하는 서버
// const server = http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.write('hello');
//   res.end();
// });

// post-test 1. preflight 요청(options 메소드)을 대응하지 않는 서버
// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.write('hello');
//     res.end();
//   } else {
//     res.statusCode === 404;
//     res.end();
//   }
// });

// post-test 2. preflight 요청(options 메소드)을 대응하는 서버
// const server = http.createServer((req, res) => {
//   if (req.method === 'OPTIONS') {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-control-Allow-Method', 'POST');
//     res.setHeader('Access-Control-Allow-Headers', 'content-type');
//     res.end();
//   } else if (req.method === 'POST') {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.write('hello');
//     res.end();
//   } else {
//     res.statusCode === 404;
//     res.end();
//   }
// });

server.listen(18888);
console.log('start http listening :18888');
