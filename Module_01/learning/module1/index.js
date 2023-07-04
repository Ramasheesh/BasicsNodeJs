const http = require('http');
const dt = require('myFirstModule')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("done"+dt.myDateTime());
    res.end();
}).listen(5000);

