var express = require('express');
var router = express.Router();
var userService = require('../user_service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null) {
    res.render('index', { title: 'TatseBytes - POS', styles: ['style.css']});

  } else {
    res.render('login', { title: 'TatseBytes - POS', styles: ['auth.css']});
  }
});

/* GET users listing. */
router.get('/:tableNumber', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null) {
    res.send('The Table Number is ' + req.params.tableNumber);
  } else {
    res.render('login', { title: 'TatseBytes - POS', styles: ['auth.css']});
  }
});



module.exports = router;
