const express = require('express')
const index = express()

index.get('/',function(req,res) {
    res.send("<p>yes sir res mil gya</p>");
})
index.listen(3000)