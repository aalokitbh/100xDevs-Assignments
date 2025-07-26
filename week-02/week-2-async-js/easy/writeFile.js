const fs = require('fs');

fs.appendFile('./easy/a.txt','update content from this file', (err) => {
    if(err) {
        console.log('Write Error:');
    } else {
        console.log('File updated successfully!');
        
        // Read file AFTER write completes
        fs.readFile('./easy/a.txt','utf-8',(err,data) => {
            if(err)
                console.log("Read Error!!");
            else
                console.log(`Here are the contents of the file:`,data);
        });
    }
});