var db = require("../models");

module.exports = function(app) {
	app.get("/api/lanagues", function(req, res) {
		db.Language.findAll({}).then(function(dbLanguage) {
			res.json(dbLanguage);
		});
	});

	app.post("/api/languages", function(req, res) {
		console.log(req.body);

		db.Language.create({
			language: req.body.language,
			studied: req.body.studied,
			createdAt: req.body.createdAt
		}).then(function(dbLanguage) {
			res.json(dbLanguage);
		});
	});

	app.put("/api/langauges", function(req, res) {
		db.Language.update({
			studied: true
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbLanguage) {
			res.json(dbLanguage);
		});
	});
};