//taking input from cmd

// console.log(process.argv)
// console.log(process.argv[2])


const fs = require('fs')
const input = process.argv;
//condition
if(input[2]=='add'){
fs.writeFileSync(input[3],input[4])//file create
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);// file remove
}else{
    console.log("invalid input");
}