const fs = require('fs');

fs.readFile('./medium/a.txt','utf-8',(err,data) => {
    if(err)
        console.log(`Error Detected !!`,err);
    const cleanedData = data.replace(/\s+/g,' ').trim()

    fs.writeFile('./medium/a.txt',cleanedData,(err) => {
        if(err)
            console.log(`Error Detected!`,err);
        else 
            console.log(`File cleaned successfully!`);
    })
})