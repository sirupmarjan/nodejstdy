var http = require('http');
var moment = require('moment');
var salam = require('./salam');
var fs = require('fs');

http.createServer(function(req,res){
    fs.appendFileSync("dataSaya.txt", "ini data saya hehehe ", function(err){
        if(err) throw err;
    });
        fs.readFile('halo_saya.html', (err, data) =>{
            if (err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });    
}).listen(8080);

console.log("start on http://localhost:8080");


