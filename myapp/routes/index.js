const express = require('express');
const indexModel = require('../models/indexModel')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/about', function (req, res, next) {
  res.render('about');
});


router.get('/contact', function (req, res, next) {
  res.render('contact');
});

router.post('/contact', function (req, res, next) {
  indexModel.contact(req.body).then((result) => {
    res.render('contact');
    
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/single', function (req, res, next) {
  res.render('single');
});



router.get('/blog', function (req, res, next) {
  res.render('blog');
});



module.exports = router;
