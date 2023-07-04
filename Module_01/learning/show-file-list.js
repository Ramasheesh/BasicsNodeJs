const fs = require('fs')

//fs.writeFileSync('fruits.txt')
const path = require('path');
const dirPath = path.join(__dirname,'files');
// console.log(dirPath);

//  --------create file--------//

// for(let i = 0 ;i<4;i++){
//     // fs.writeFileSync("hello-"+i+".txt","simple file created")//or ${i}==+i+
//     fs.writeFileSync(dirPath+"/hello-"+i+".txt","simple file created")
// }

// read file//
fs.readdir(dirPath,(req,files)=>{
    files.forEach((item) => {
        console.log("file name is ",item);
    });
})