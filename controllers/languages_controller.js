var db = require("../models");

module.exports = function(app) {
	
	app.get("/", function(req, res) {
		db.Language.findAll({}).then(function(dbLanguage) {
			var handlebarsObject = {
				Language: dbLanguage
			};

			res.render("index", handlebarsObject);
		});
	});

	app.post("/", function(req, res) {

		db.Language.create({
			language: req.body.language
		}).then(function(dbLanguage) {
			res.redirect("/");
		});
	});

	app.put("/:id", function(req, res) {
		db.Language.update({
			studied: true
		}, {
			where: {
				id: req.params.id
			}
		}).then(function(dbLanguage) {
			res.redirect("/");
		});
	});
};