var db = require('./db_config');

db.connect(function(err){
    if(err) throw err;

    let sql = "INSERT INTO t_customer(name, address) VALUES('Aldin', 'Jogja')";

    db.query(sql, function(err, result){
        if(err) throw err;
        console.log('data saved');
    });
});