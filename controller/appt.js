var db = require('../database/db.js');

exports.loadCurrentAppt = function(req,res){
	db.load_appts(req,res);
}

