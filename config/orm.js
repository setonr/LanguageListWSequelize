var connection = require("./connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "='" + ob[key] + "'"); 
		}
	}

	return arr.toString();
}


var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	}, 
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";


		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		})
	}, 
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	delete: function(table, condition, cb) {
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	}
}

module.exports = orm;

// //eatOne()
// var eatOne = function() {
// 	app.delete("/:id", function(req, res) {
// 		connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
// 			if (err) {
// 				throw err;
// 			}

// 			res.redirect("/");
// 		});
// 	})

// // //updateOne()
// var updateOne = function() {
// 	app.put("/", function(req, res) {
// 		connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [req.body.burger, req.body.id], function(err, result) {
// 			if (err) {
// 				throw err;
// 			}

// 			res.redirect("/");
// 		});
// 	});
// }

// ;
// }

// module.exports = selectAll;
// module.exports = insertOne;
// module.exports = updateOne;
// module.exports = eatOne;


// 

// //insertOne()
// var insertOne = function() {
// 	app.get("/", function(req, res) {
// 		connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
// 			if (err) {
// 				throw err;
// 			}

// 			res.redirect("/");
// 		});
// 	});
// }

