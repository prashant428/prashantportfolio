var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home',
    h1 : 'Heading'});
});
router.get('/home', function(req, res, next) {
  res.render('index', 
  { title: 'Home',
    h1 : 'Heading'});
});
router.get('/about', function(req, res, next) {
  res.render('index', 
  { title: 'About',
    h1 : 'Heading'});
});
router.get('/products', function(req, res, next) {
  res.render('index', 
  { title: 'Products',
    h1 : 'Heading'});
});
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'Services',
    h1 : 'Heading'});
});
router.get('/contact', function(req, res, next) {
  res.render('index', 
  { title: 'Contact',
    h1 : 'Heading'});
});

module.exports = router;
