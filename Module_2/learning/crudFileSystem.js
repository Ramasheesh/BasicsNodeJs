const fs = require('fs');
const path = require('path');
const dirPath  = path.join(__dirname,"crud_file")

const filePath = dirPath+'/fruits.txt';

// fs.writeFileSync(filePath,"file created") //file created

            // read file in folder//
// fs.readFile(filePath,'utf-8',(err,item)=>{ // callback 
//     console.log(item);//use utf-8  otherWise buffer occured
// })

            //update
// fs.appendFile(filePath,' and file is updated successfully',(err,item)=>{
//     if(!err) console.log("fiel is updated successfully");
// })

            //rename
// fs.rename(dirPath,'apple.txt',(err,item)=>{
//         if(!err) console.log("fiel renamed successfully");
// })


// fs.unlinkSync(filePath,'/apple.txt')