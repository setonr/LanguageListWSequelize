var express = require("express");

var router = express.Router();

var language = require("../models/language.js");

//create router for the app
router.get("/", function(req, res) {
	language.all(function(data) {
		var hbsObject = {
			language: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	language.create([
		"language"
		], [
			req.body.language
		], function() {
			res.redirect("/");
		});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	language.study({
		studied: 1
	}, condition, function() {
		res.redirect("/");
	});
});

router.delete("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	language.delete(condition, function() {
		res.redirect("/");
	});
});

//export

module.exports = router;