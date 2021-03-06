var express = require("express"); 


var PORT = process.env.PORT || 8080; 

var app = express(); 

app.use('/static-files', express.static("public"));

app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 

var exphbs = require("express-handlebars"); 

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars"); 

var routes = require("./controllers/icecream_controller.js");
// var routes = require("./app/config/connection.js")
app.use(routes); 

app.listen(PORT, function() {
    console.log("The server is listening on http://localhost: " + PORT);
});
