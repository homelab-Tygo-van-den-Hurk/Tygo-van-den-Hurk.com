/* I still don't understand what this does */
const http = require('http');
const fs = require('fs');

/* server site */
const hostname = '141.148.237.197';
const port = 3000;

fs.readfile(__direname+"/index.html", "utf-8", function(err, data){

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    });
      
      server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });

});