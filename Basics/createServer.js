const http = require('http')

http.createServer((req,res)=>{
    res.send("helo sir ");
    // res.end("done");
}).listen(1000);