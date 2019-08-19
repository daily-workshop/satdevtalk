function logRequest(req) {
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  for (const a in req.headers) {
    console.log(`${a}: ${req.headers[a]}`);
  }
  console.log('');

  let data = '';
  req.on('data', chunk => {
    data += chunk.toString();
  });
  req.on('end', () => {
    console.log(data);
  });
}

module.exports = logRequest;
