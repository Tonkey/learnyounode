
let http = require("http");

//function(request, response){} = (request,response)=>{}
let server = http.createServer((request, response)=>{
    response.setHeader("Content-type", "text/html");
    response.end("<h1>HELLO CLASS </h1>");
});

server.listen(1234, "localhost",()=>console.log("Server started, listening on port: " + 1234));