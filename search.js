var http = require('http');
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(request, response){
    var q = url.parse(request.url, true);
    var filename = "."+q.pathname;

    //baca file 
    fs.readFile(filename, function(error, data){
        if(error){ //kirim balasan bahwa error
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end('404 Not Found');
        }
        //kirim balasan dengan isi file statis
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(data);
        return response.end();
    })
}).listen(8123);

console.log('server running on http://localhost:8123');

