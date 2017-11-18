var express = require('express');
var router = express.Router();

var myJson = {title:"THIS IS A TITLE", msg:"This is a Message"};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', myJson);
});

router.get('/api', function(req, res, next) {
  console.info(req)
  res.send(myJson);
});

module.exports = router;
