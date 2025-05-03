const { transporter } = require("../../config/mailConfig");
const enqModel = require("../../model/enqModel");


const sendEnq = async (req, res) => {
    try {
      let { userName, phoneNumber, userEmail, userTitle, userDescription } = req.body;
  
      // Store data in MongoDB
      const newUser = new enqModel({
        userName,
        phoneNumber,
        userEmail,
        userTitle,
        userDescription,
      });
  
      await newUser.save();
  
      // Send email to the user
      const userMailOptions = {
        from: '"Support Team" <${process.env.EMM}>',
        to: userEmail,
        subject: "We received your inquiry!",
        html: `<p>Hello ${userName},</p>
               <p>We have received your inquiry regarding: <b>${userTitle}</b>.</p>
               <p>Our team will get back to you soon.</p>
               <p>Best Regards, <br> Support Team</p>`,
      };
  
      await transporter.sendMail(userMailOptions);
  
      // Send email to your email with the details
      const adminMailOptions = {
        from: '"Support Team" <${process.env.EMM}>',
        to: process.env.STM,
        subject: `New Inquiry Received: ${userTitle}`,
        html: `<p>New inquiry received:</p>
               <p><b>Name:</b> ${userName}</p>
               <p><b>Phone:</b> ${phoneNumber}</p>
               <p><b>Email:</b> ${userEmail}</p>
               <p><b>Title:</b> ${userTitle}</p>
               <p><b>Description:</b> ${userDescription}</p>`,
      };
  
      await transporter.sendMail(adminMailOptions);
  
      res.status(200).json({ status: 1, msg: "Inquiry submitted and email sent." });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ status: 0, msg: "An error occurred", error });
    }
  };
  


module.exports = { sendEnq }