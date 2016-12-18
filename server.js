// include the http module you need
var http = require("http");
// access the createServer method in the http object
http.createServer(function(request, res) {

 // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


// tell the server what kind of file is coming at it
    res.writeHead(200, {"Content-Type": "text/plain"});
// make the server output a message
    res.write("Welcome to the future of JavaScript2 .");
// End the server interaction
    res.end();
}).listen(3000);
