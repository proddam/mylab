var http = require('http');
var server = http.createServer(function(req, res) {
  res.end('Hello World2');
});
server.listen(9000);

console.log(__dirname);