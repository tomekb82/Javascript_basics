// include the http module you need
var http = require("http");
// access the createServer method in the http object
http.createServer(function(req, res) {

 // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

console.log(req.method);
var data;

if (req.method == 'POST') {
    console.log("[200] " + req.method + " to " + req.url);

      
    req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
      data = chunk.toString();	
    });
    
    req.on('end', function() {
      // empty 200 OK response for now
      console.log(data);

      res.writeHead(200, "OK", {'Content-Type': 'application/json'});
      res.write(data);
      res.end();
    });
    
  } else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }



}).listen(3000);
