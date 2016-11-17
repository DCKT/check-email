const nodemailer = require('nodemailer')
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./transportCredential.txt', 'utf-8'))

console.log(data)
const transporter = nodemailer.createTransport(data.smtpTransporter);

module.exports = function check(args) {
  const emailHtml = fs.readFileSync(args[0], 'utf-8')

  const mailOptions = {
    from: '"CHECK MAIL 👥" <check_mail@dck.com>', // sender address
    to: data.smtpTransporter, // list of receivers
    subject: 'TEST MAIL ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: emailHtml
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }

    console.log(`Message sent: ${info.response}`)
  });
}
