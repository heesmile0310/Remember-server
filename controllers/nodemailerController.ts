const nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
const smtpTransport = nodemailer.createTransport("SMTP", {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "90d12d8320b78e",
    pass: "906d79948d49ad",
  },
});

// setup e-mail data with unicode symbols
const mailOptions = {
  from: "heesmile0310@gmail.com", // sender address
  to: "83f08c1f63-7b314f@inbox.mailtrap.io", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world ✔", // plaintext body
  html: "<b>Hello world ✔</b>", // html body
};

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log("Message sent: " + response.message);
  }

  // if you don't want to use this transport object anymore, uncomment following line
  //smtpTransport.close(); // shut down the connection pool, no more messages
});

smtpTransport(mailOptions);
