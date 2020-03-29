var express = require("express");
var handlebars = require('express-handlebars');

var app = express();
path = require('path');

var __dirname = process.cwd();

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
defaultLayout: 'main'
}));



app.use(express.static("assets"));


app.get("/", (req, res)=>{

	res.render("index", {layout: 'main'});

});


app.get("/about", (req, res)=>{

	res.render("about")

});


app.get("/contact", (req, res)=>{

	res.render("contact")

});


app.get("/services", (req, res)=>{

	res.render("services")

});

app.get("/how", (req, res)=>{

	res.render("how")

});



app.listen(3000);