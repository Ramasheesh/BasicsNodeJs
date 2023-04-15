const express = require('express')
const createS = express()

createS.get('/',(req,res)=>{
    res.send("<h1>Hello sir I'm RamAsheesh</h1>");
}).listen(4000,()=>{
    console.log("server is running at port,4000")
})




















// // Create server
// http.createServer(function (req, res) {

// 	// Send the HTTP header
// 	// HTTP Status: 200 : OK
// 	// Content Type: text/plain
// 	res.writeHead(200, { 'Content-Type': 'text/plain' });

// 	// Send the response body as "This is the example
// 	// of node.js web based application"
// 	res.end('This is the example of node.js web-based application \n');

// 	// Console will display the message
// }).listen(5000,
// 	() => console.log('Server running at http://127.0.0.1:5000/'));

