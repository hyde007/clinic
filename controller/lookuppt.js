var db = require('../database/db.js');

exports.lookUpPt = function(req,res){
	db.lookUpPt(req,res);
}