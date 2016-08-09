var express = require('express');
var router = express.Router();
var appt = require('../controller/appt.js');
var lookup = require('../controller/lookuppt.js');
var bookappt = require('../controller/bookAppt.js');
  

// Load current date appointment
router.get('/currentApptList', function(req, res) {
  appt.loadCurrentAppt(req,res);
//  res.render();
})

// Car models page
router.get('/lookUp/:lookUpParam', function(req, res) {
  lookup.lookUpPt(req,res);
})

router.get('/loadDocList', function(req, res) {
  bookappt.loadDocList(req,res);
})

router.post('/bookAppt',function(req,res){
	bookappt.bookAppt(req,res);
	console.log('called route');
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.sendFile('index.html');
});
module.exports = router;