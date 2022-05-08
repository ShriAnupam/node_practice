const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('Welcometo our home page')
    res.end();
})

server.listen(5000)