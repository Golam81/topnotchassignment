var transporter = require("./mailer.js");
var path = require('path')


var exports = module.exports = {};


exports.process = async function(req, res){

	var mailOptions = {
		to: "topnotchassignments@gmail.com",
		subject: req.body.subject,
		body: 'From' + req.body.name + 'with email' + req.body.email + '\n' + req.body.message
	}

	var info = await transporter.sendMail(mailOptions)
	

 
 res.render("contactsdone");



}