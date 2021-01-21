var db = require('./db_config');

db.connect(function(err){
    if(err) throw err;
     let sql = "DELETE FROM t_customer WHERE id = 1";
     db.query(sql, function(err, result){
        if (err) throw err;
        console.log('Succesfully delete data');
        console.log('affected row : '+result.affectedRows);
     });
});