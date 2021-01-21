var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);

    if(q.pathname == "/send/" && req.method == "GET"){
        var keyword = q.query.keyword;

        if(keyword){
            //ambil data dari form dengan metode get 
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("<h3> Result : </h3>");
            res.write("<p>Anda mencari :  <b>"+keyword+"</b></p>");
            res.write("<pre>hasil tidak ditemukan!</pre>");
            res.end("<a href='/send/'>kembali</a>");
        }else{
            fs.readFile('form.html', (err, data) =>{
                if(err){//send error message
                    res.writeHead(404, {'Content-Type':'text/html'});
                    return res.end("404 tidak ditemukan");
                }

                //kirim form search.html
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                return res.end();

            });
        }
    }
}).listen(8080);

console.log('server running on http://localhost:8080');