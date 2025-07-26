const fs = require('fs');
fs.readFile('./easy/a.txt','utf-8',(err,data)=> {
    if(err){
        console.log('Error Detected !!');
    }else {
        console.log(`content of the file:`,data);
    }
});
for(let i=0;i<100;i++) {
    console.log('hello');
}