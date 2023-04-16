const  express = require('express');
const path = require('path');

const app  = express();

const filePath = path.join(__dirname,'1htmlData');

//Using mideleWare
// app.use(express.static(filePath));//static is use for load static pages

app.get('',(req,res)=>{
    res.sendFile(`${filePath}/home.html`);
})

app.get('/about',(req,res)=>{
    res.sendFile(`${filePath}/about.html`);
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${filePath}/contact.html`);
})

app.get('*',(req,res)=>{
    res.sendFile(`${filePath}/error.html`);
})

app.listen(9000,()=>{
    console.log("Listening....");
})