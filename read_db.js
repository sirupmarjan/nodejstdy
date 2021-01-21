var db = require('./db_config');

db.connect(function(err){
    if (err) throw err;

    let sql = "SELECT * FROM t_customer";
    db.query(sql, function(err, result){
        if (err) throw err;
        
        console.log('ID \t NAME \t\t ADDRESS');
        console.log('------------------------------------------------------------------');
        //gunakan perulangan 
         result.forEach(customer => {
            console.log(`${customer.id} \t ${customer.name} \t ${customer.address}`);
        });

    });
});