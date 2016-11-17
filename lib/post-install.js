const fs = require('fs')
const inquirer = require('inquirer')

console.log('Welcome to check-mail package !')
console.log('This package needs some information to send the email you want ! \n\n')

const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
    validate(value) {
      return !!value
    }
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your email password',
    validate(value) {
      return !!value
    }
  },
  {
    type: 'input',
    name: 'smtp',
    message: 'Please enter the SMTP address of your email',
    validate(value) {
      return !!value
    }
  },
  {
    type: 'input',
    name: 'emailServices',
    message: 'Please enter the emails of the service you want to check (separated by a comma)',
    validate(value) {
      return !!value
    }
  },
]

inquirer.prompt(questions).then(function (answers) {
  const smtpTransporter = `smtps://${answers.email}:${answers.password}@${answers.smtp}`
  fs.writeFileSync('./transportCredential.txt', JSON.stringify({
    smtpTransporter,
    emailServices: answers.emailServices
  }))
});
