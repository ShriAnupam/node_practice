const {readFileSync, writeFileSync } = require('fs');
// Read As Chunk data 
first = readFileSync('./content/test.txt');
second = readFileSync('./content/subfolder/test1.txt');
third = readFileSync('./content/subfolder/subsubfolder/test2.txt');

console.log(first,second,third);

console.log('start this task');
// Read As data 
first = readFileSync('./content/test.txt','utf8');
second = readFileSync('./content/subfolder/test1.txt','utf8');
third = readFileSync('./content/subfolder/subsubfolder/test2.txt','utf8');

console.log(first,second,third);

// this function only create file on the same directory the function file present not in directories
writeFileSync('./result-sync.txt',
`Here is the result : ${first}, ${second}, ${third}`,
{flag:'a'} //append data in the current file
)

console.log('done with this task');

console.log('new task intialize');