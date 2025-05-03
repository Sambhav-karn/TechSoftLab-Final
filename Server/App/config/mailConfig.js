const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.MHU,
    port: process.env.PORTM,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: process.env.EMM,
      pass: process.env.PASSM,
    },
  });


  module.exports = {transporter};