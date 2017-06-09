var express = require("express"); 
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var db = require("./models");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/languages_controller.js")(app);

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
	});
});





