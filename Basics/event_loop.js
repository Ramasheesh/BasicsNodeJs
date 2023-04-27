const fs = require('fs');

const FileName = ("targetfile.txt");

fs.watch(FileName,()=> console.log(`file changed`));
