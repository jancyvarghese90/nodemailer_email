const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
    service:'gmail',
   host:"smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.USER,//sender gmail address
    pass: process.env.APP_PASSWORD,//app password from gmail 
  },
});
const mailOptions={
from: {
    name:'Jancy Varghese',
    address:process.env.USER
}, // sender address
    to: 'anishsam2187@gmail.com', // list of receivers
    subject: "Send email through nodemailer ", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }

  const sendMail=async(transporter,mailOptions)=>{
    try{
await transporter.sendMail(mailOptions)
console.log("email has been sent successfully!!")
    }
    catch(err)
    {
console.log(err)
    }
  }
  sendMail(transporter,mailOptions);