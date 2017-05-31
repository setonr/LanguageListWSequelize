var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "",
      database: "languages_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;




// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// var app = express();
// var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "../public"));

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
