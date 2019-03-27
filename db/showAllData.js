var express = require('express');
var router = express.Router();

var mysqlDB = require('./mysql2');

router.get('/', function (req, res, next) {
    mysqlDB.query('select * from Persons', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;

