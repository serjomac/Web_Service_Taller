var express = require('express');
var router = express.Router();
var User = require('../models/User'); 
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.getAllUsers(function(err, rows) {  
    if (err) {  
        res.json(err);  
    } else {  
        res.json(rows);  
    }  
});
});

router.post('/', function(req, res, next) {  
  User.addUser(req.body, function(err, count) {  
      if (err) {  
          res.json(err);  
      } else {  
          res.json(req.body);
          console.log("Se envio") 
      }  
  });  
});

module.exports = router;
