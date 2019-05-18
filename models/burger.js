var orm = require('../config/orm.js');

//Create the burger object
var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res){
			cb(res);
		});
	},
	
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},

	//The objColVals is an object specifying columns as object keys with associated values
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;