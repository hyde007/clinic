var db = require('../database/db.js');

exports.loadDocList = function(req,res){
	db.loadDocList(req,res);
}

exports.bookAppt = function(req,res){
	db.bookAppt(req,res);
	console.log('calling db');
}