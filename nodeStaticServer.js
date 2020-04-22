var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer(function (req, res) {
  console.time('start')  
  let mimeJosn = fs.readFileSync(__dirname + '/mime.json')
  mimeJosn = JSON.parse(mimeJosn.toString())
  req.url = req.url === '/' ? '/index.html' : req.url
  let mime = mimeJosn[path.extname(req.url)] 
  res.writeHead(200, {'Content-Type': mime })
//   console.log(req.url)
  if ('/favicon.ico' !== req.url) {
    let content =  fs.readFileSync(__dirname + '/moblie' + req.url)
    res.write(content.toString())
  }
  console.time('start')
  res.end()
}).listen(3300);

console.log('Server running at http://127.0.0.1:3300');