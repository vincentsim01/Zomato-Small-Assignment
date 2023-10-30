let http=require('http');
let server=http.createServer(function(req, res)=>{
    res.write("Hi from Server!");
    res.end();

})

server.listen(3422);