var mysql = require('mysql');

var db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "", 
    database : "sirup_marjan"
});

// db.connect(function(err){
//     if(err) throw err;
//     console.log('succesfully connected');
// });

module.exports = db;