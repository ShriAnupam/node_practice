const {readFile, writeFile } = require('fs');
// Read As data
console.log('start this task');
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
                // console.log(result);
                console.log('done with this task');       
            }
        )
    });
});

console.log('start new task here');