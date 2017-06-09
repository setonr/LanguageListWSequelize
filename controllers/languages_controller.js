
var express = require("express");
var router = express.Router();

var db = require("../models/");


router.get("/", function(req, res) {
	res.redirect("/languages");
});

router.get("/languages", function(req, res) {
	db.Language.findAll().then(function(dbLanguage) {
		var hbsObject = { Language: dbLanguage};
		return res.render("index", hbsObject);
	});
});

router.post("/languages/create", function(req, res) {
	db.Language.create({
		language: req.body.language
	}).then(function(dbLanguage) {
		res.redirect("/");
	});
});

router.put("/languages/update", function(req, res) {
	db.Language.update({
		studied: true
	},
	{
		where: {
			id: req.body.id
		}
	}).then(function(dbLanguage) {
		res.redirect("/");
	});
});

module.exports = router;
	
