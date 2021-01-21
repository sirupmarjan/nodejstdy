var db = require('./db_config');

db.connect(function(err){
    if (err) throw err;

    let sql = `UPDATE  t_customer
                    SET  address = 'Klaten'
                    WHERE id = 17`;
    db.query(sql, function(err, result){
        if (err) throw err;
        console.log('data updated!');
        console.log('row affected : '+result.affectedRows);
    });
});