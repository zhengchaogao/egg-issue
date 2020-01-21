
var http = require('http');

http.get('http://127.0.0.1:7001/user/abc1', function (req, res) {
  var html = '';

  req.on('data', function (data) {
    html += data
  });
  req.on('end', function () {
    console.info(html);
  })
})
http.get('http://127.0.0.1:7001/user/abc2', function (req, res) {
  var html = '';

  req.on('data', function (data) {
    html += data
  });
  req.on('end', function () {
    console.info(html);
  })
})
http.get('http://127.0.0.1:7001/user/abc3', function (req, res) {
  var html = '';

  req.on('data', function (data) {
    html += data
  });
  req.on('end', function () {
    console.info(html);
  })
})