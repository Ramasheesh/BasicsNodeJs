const express = require('express');

const app = express();

app.get('/rama',function(req,res){
    res.send("Hello, this is get methods");
    res.end()
});
app.post('/',function(req,res){
    res.send("call post methods");
});
app.all('/',function(req,res){
    res.send("all methods");
});
app.listen(4000,console.log("listening......"));
