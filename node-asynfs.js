const {readFile, writeFile } = require('fs');
// Read As Chunk data 
readFile('./content/test.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    const first = result;
    console.log(first); 
    readFile('./content/subfolder/test1.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second = result;
        console.log(second);
        writeFile('./result-sync1.txt',
            `Here is the result : ${first}, ${second}`,
            {flag:'a'}, //append data in the current file
            (err, result)=>{
                if(err){
                    console.log(err);
                }
                console.log(result);       
            }
        )
    });
});


// this function only create file on the same directory the function file present not in directories
