const express = require('express')
const index = express()

index.get('/',function(req,res) {
    res.send("<p>yes sir res mil gya</p>");
    res.send('<h1> Hello sir </h1>');
})
index.listen(3000)