var db = require('./db_config');

db.connect(function(err) {

    if(err){
        throw err;
    }

    let sql ="CREATE DATABASE sirup_marjan";
    db.query(sql, function(err, result){
        if(err) throw err;
        console.log("Database sirup_marjan created : "+result);
    });
});