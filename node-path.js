const path = require('path');

// check reference path 
// console.log(path);

// path seperator
console.log(path.sep);

// Relative paths for 3 files
firstfile = path.join('content','test.txt')
console.log(firstfile);
Secondfile = path.join('/content/','subfolder','test1.txt')
console.log(Secondfile);
Thirdfile = path.join('content','subfolder','subsubfolder','test2.txt')
console.log(Thirdfile);

// BaseNames
const base = path.basename(firstfile);
console.log(base);
const base1 = path.basename(Secondfile);
console.log(base);
const base2 = path.basename(Thirdfile);
console.log(base);

// Absolute Path paths for 3 files
firstfile = path.resolve(__dirname,'content','test.txt')
console.log(firstfile);
Secondfile = path.resolve(__dirname,'content','subfolder','test1.txt')
console.log(Secondfile);
Thirdfile = path.resolve(__dirname,'content','subfolder','subsubfolder','test2.txt')
console.log(Thirdfile);