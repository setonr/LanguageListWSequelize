var orm = require("../config/orm.js");

//create code that will call the ORM functions using burger-specific input for the ORM.
var language = {
	all: function(cb) {
		orm.selectAll("languages", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.insertOne("languages", cols, vals, function(res) {
			cb(res);
		});
	}, 
	study: function(objColVals, condition, cb) {
		orm.updateOne("languages", objColVals, condition, function(res) {
			cb(res);
		});
	},
	delete: function(condition, cb) {
		orm.delete("languages", condition, function(res) {
			cb(res);
		});
	}	
};

module.exports = language;
