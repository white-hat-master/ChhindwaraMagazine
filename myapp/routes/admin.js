var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('deshbord');
});

// router.get('/deshbord', function(req, res, next) {
//   res.render('deshbord');
// });

module.exports = router;
