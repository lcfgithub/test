var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer(function (req, res) {

  let mimeJosn = fs.readFileSync(__dirname + '/mime.json');
  mimeJosn = JSON.parse(mimeJosn.toString())
  let mime = mimeJosn[path.extname(req.url)] 
  res.writeHead(200, {'Content-Type': mime });
  if ('/favicon.ico' !== req.url) {
    let content =  fs.readFileSync(__dirname + '/moblie' + req.url)
      res.write(content.toString())
  }

  res.end()
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');