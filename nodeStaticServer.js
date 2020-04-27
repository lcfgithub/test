const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  }
http
  .createServer(function (req, res) {
    req.url = req.url === "/" ? "/index.html" : req.url;
    console.time(req.url);
    let mimeJosn = fs.readFileSync(__dirname + "/mime.json");
    mimeJosn = JSON.parse(mimeJosn.toString());
    let mime = mimeJosn[path.extname(req.url)];
    res.writeHead(200, { "Content-Type": mime });
    //   console.log(req.url)
    if ("/favicon.ico" !== req.url) {
      let content = fs.readFileSync(__dirname + "/moblie" + req.url);
      res.write(content.toString());
    }
    console.timeEnd(req.url);
    res.end();
  })
  .listen(3300);

  console.log('master master 解决冲突')
console.log("Server running at http://127.0.0.1:3300");
