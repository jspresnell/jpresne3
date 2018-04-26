var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "jpresne3",
  password: "jpresne3@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET users listing. */
router.get('/profile', function(req, res, next) {
	con.query("SELECT * FROM jpresne3.profile", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* GET users listing. */
router.get('/location', function(req, res, next) {
  con.query("SELECT * FROM jpresne3.location", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});


/* POST users input. */
router.post('/login', function(req, res, next) {
  var sql = con.query("INSERT INTO jpresne3.login set ?", req.body, function (err, result, fields) {
    if (err) throw err;

    console.log(sql);
    res.send(result);
  });
});

module.exports = router;

