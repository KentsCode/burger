var mysql = require('mysql');

var mySQLconnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2003Sv650',
    database : 'burgers_db'
});
 
function connectToMySql () {
    mySQLconnection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    
        console.log('connected as id ' + mySQLconnection.threadId);
    });
    
    /*mySQLconnection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });*/
}

module.exports = connectToMySql();
module.exports = mySQLconnection;