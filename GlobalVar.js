console.log(__dirname); // path current dierctory
console.log(__filename); // file name
//require -function to use modules(Common JS)
// module - info about current module (file)
// process - info about evn where the program is being executed


setTimeout(() => {
    console.log('Hello from time out function');
}, 1000);// call function after 1sec



setInterval(() => {
    console.log('hello world from interval')
}, 2000); // contineous loop of hello world after 2sec


var interval = setInterval(doStuff, 2000); // 2000 ms = start after 2sec 
function doStuff() {
  console.log('this is a 2 second warning');
  clearInterval(interval);
}


const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
 console.log("Happy Birthday to You !!");
}

function myStopFunction() {
  clearTimeout(myTimeout);
}