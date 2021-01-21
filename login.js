var http = require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');

http.createServer(function (req, res){

        if(req.url === '/login/' && req.method === "GET"){
            // show login form
            fs.readFile("login.html", (err, data) =>{
                if(err){  //send error message
                    res.writeHead(404, {'Content-Type':'text/html'});
                    return res.end("404 Not Found");
                }
                //trow login.html
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                return res.end();
            });
        }

        if(req.url == "/login/" && req.method == "POST"){
            //ambil data dari form dan proses
            var requestBody = '';
            req.on('data', function(data){
                //tangkap data dari form 
                requestBody += data;

                //kirim balsan jika datanya terlalu besar 
                if(requestBody.length > 1e7){
                    res.writeHead(413, 'Request Entity Too Large', {'Content-Type':'text/html'});
                    res.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
                }
            });
            //sudah dapat datanya 
            //selanjutnya di parse
            req.on('end', function(){
                var formdata = qs.parse(requestBody);
                
                //cek login
                if(formdata.username === "sirupmarjan" && formdata.password === "sapi"){
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.write('<h2>Selamat Datang Gan!</h2>');
                    res.write('<p>username : '+formdata.username+'</p>');
                    res.write('<p>password :'+formdata.password+'</p>');
                    res.end("<a href = '/login/'>Kembali</a>");
                }else{
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.write('<h2>Login Failed</h2>');
                    res.end("<a href = '/login/'>Coba lagi </a>");
                }

            });

        }
}).listen(8080);
console.log('Server run on http://localhost:8080');

