var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario'); 
/* GET users listing. */
router.get('/', function(req, res, next) {
  Usuario.getAllUsers(function(err, rows) {  
    if (err) {  
        res.json(err);  
    } else {  
        res.json(rows);  
    }  
});
});


module.exports = router;
