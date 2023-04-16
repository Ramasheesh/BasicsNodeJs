/*
HTML tags
show JSON DATA
LINK Page
*/

const  express = require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.send(`
    <h1>Welcome , This is Home Page</h1>
    <a href="/about">Go to about Page</a>
    `);

});
app.get('/about',(req,res)=>{
    res.send(`
    <h2>Welcome , This is About Page</h2>
    <input type="text" placeholder="user name "value="${req.query.name}">  </input>
    <button>Submit</button>
    <h3><a href="/">Back to Home Page</a></h3>
    `);
});
app.listen(4000);