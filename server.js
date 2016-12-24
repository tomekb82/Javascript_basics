// include the http module you need
var http = require("http");
var counter = 0;
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


var data;

if (req.method == 'POST') {

    req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
      data = chunk.toString();	
    });

    req.on('end', function() {
      res.writeHead(200, "OK", {'Content-Type': 'application/json'});
      res.write(data);
      res.end();
    });
    
  } else {
    var funcName = req.url.split("=")[1]; 
    res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
    res.write(funcName +"('dane z serwera, licznik=" + ++counter + "')");
    res.end();	
  }



}).listen(3000);
