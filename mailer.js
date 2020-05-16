nodemailer = require('nodemailer')



var transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: "asifmailer21@gmail.com",
		pass: "gmail@21"
	}
});


module.exports= transporter;