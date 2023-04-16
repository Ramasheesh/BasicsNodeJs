const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("Hello, this is get methods");
    res.end()
});
app.get('/help',function(req,res){
    res.send("call help methods");
});
app.get('/101',function(req,res){
    res.send("101 methods");
});
app.listen(4000,console.log("listening......"));
