/*
mkae html file
make html folder
load html file
*/ 

const  express = require('express');
const path = require('path');

const app  = express();

const filePath = path.join(__dirname,'1htmlData');

//Using mideleWare
app.use(express.static(filePath));//static is use for load static pages
app.listen(5000,()=>{
    console.log("Listening....");
})