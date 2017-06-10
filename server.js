var express = require("express"); 
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");
var app = express();
var path = require("path");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var routes = require("./controllers/languages_controller.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
	});
});





