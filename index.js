var cluster = require('cluster');

if(cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {

var express = require("express");
var handlebars = require('express-handlebars');
var bodyParser = require("body-parser");
var proc = require('./processmail.js');

var app = express();
path = require('path');

var __dirname = process.cwd();

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
defaultLayout: 'main'
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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

 
app.post("/contactsdone", proc.process)

const port = process.env.PORT || 4000;

app.listen(port);
}