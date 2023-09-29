const nodemailer = require("nodemailer");
const generateEmailTemplate = require("../api/HTMLTemplates/OTPEmailTemp"); // Import your email template function

const email = process.env.USER_MAIL;
const pass = process.env.USER_PASS;

export default async function handler(req, res) {
  try {
    const { recipientEmail: recipientEmail, otpValue: otpValue } = req.body;

    // Check if recipientEmail is defined and not empty
    if (!recipientEmail) {
      return res.status(400).json({ error: "Recipient email is required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: pass,
      },
    });

    const mailOptions = {
      from: email,
      to: recipientEmail,
      subject: "Message From Shabaas Merchant Onboard Form",
      html: generateEmailTemplate(otpValue), // Use the generated email template
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form Fillup successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Form Fillup Failed " });
  }
}
