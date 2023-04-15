const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.writeHead(200,({'content-type':'text/html'}))
    // res.send("hello sir");
    res.end("done")
}).listen(4000,()=>{
    console.log("listening.....");
})