var sqlConnection = require("./connection.js");

module.exports = function ormModel (app) { 

    app.get("/api/get", function(req, res) {
        sqlConnection.query('SELECT * from burgers', function (error, results, fields) {
            if (error) throw error;
            // connected!
            console.log(results);
        });
    });
    
    app.insert("/api/insert", function(req, res) {
        var burgerName = "rodeo burger";
        var insertStatement = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + burgerName +"', false)";

        sqlConnection.query(insertStatement, function (error, results, fields) {
            if (error) throw error;
            // connected!
            console.log(results);
        });
    });

    app.update("/api/update", function(req, res) {
        var thisBurger = "quarter pounder with cheese"
        var whatToUpdate = "devoured"
        var updateStatement = "UPDATE burgers SET devoured = true WHERE id = 3;"
        sqlConnection.query(updateStatement, function (error, results, fields) {
            if (error) throw error;
            // connected!
            console.log(results);
        });
    });

}
