const  express = require('express');
const path = require('path');

const app  = express();

const filePath = path.join(__dirname,'1htmlData');

//Using mideleWare
// app.use(express.static(filePath));//static is use for load static pages

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${filePath}/profile.html`);
})

app.get('/profile',(req,res)=>{
    let user = {
        name:'Asheesh',
        email:'rcgg@gmail.com',
        state:'Punjab',
        skills:["java",'python','php','nodejs','javaScript']
    }
    res.render('profile',{user});
})

app.listen(7000,()=>{
    console.log("Listening....");
})