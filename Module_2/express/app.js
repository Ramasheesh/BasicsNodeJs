const express = require('express')
const app = express()
const port = 100

app.get('/',(req,res) =>{
    res.send("<h1>Response mil kya?</h1>");
})
app.listen(port,() =>{
    console.log("code chal raha hai sir Port no",port);
})