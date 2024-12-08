// const express = require("express");
// const nodemailer = require("nodemailer");

// const app = express();

// app.get("/" , (req, res) => {
//     res.send("I am a server !!");
// })

// app.get("/sendemail", async (req, res) => {
//     console.log("Sending Mail !!");
//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = await nodemailer.createTransport({
//         // host: "smtp.ethereal.email",
//         host: 'gmail',
//         port: 587,
//         secure: false, // true for port 465, false for other ports
//         auth: {
//         //    user: 'sabina.borer@ethereal.email',
//         //     pass: 'RadnnXfpSdc78uhmHE'
//         user: 'hs804527@gmail.com',
//         pass: 'uqcv cifn lwdn eucz'
//         },
//     });

//     let info = await transporter.sendMail({
//         from: '"Harsh Sharma 👻" <maddison53@ethereal.email>', // sender address
//         to: "hs804506@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });

//     res.send(info);

// })

// app.listen(5001, () => console.log("App is listening on Port 5001 !!"))

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();



app.get("/sendEmail", async (req, res) => {
    // Create a transporter object
    const transporter = nodemailer.createTransport({
        service: "gmail", // Use 'gmail' for Gmail's SMTP
        auth: {
          user: "hs804527@gmail.com", // Your Gmail address
          pass: "uqcv cifn lwdn eucz", // Your Gmail password or App Password
        },
      });
      
      // Email details
      const mailOptions = {
        from: "hs804527@gmail.com", // Sender's email address
        to: "hs804506@gmail.com", // Recipient's email address
        subject: "Test Email",
        text: "This is a test email sent from Node.js using Gmail SMTP!",
      };
      const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    res.send(info);
})

app.listen(5001, () => {
    console.log("Server is listening at Port 5001 !!");
})