const  express = require('express');
const app  = express();

app.get('',(req,res)=>{
    console.log("Data sent by browser",req.query);
    console.log("Data sent by browser",req.query.name);

    res.send("Welcome , This is Home Page");

});
app.listen(4000);