import nodemailer from 'nodemailer';

const email = process.env.USER_MAIL;
const pass = process.env.USER_PASS;

export default async function handler(req, res) {
  try {
    const { email: recipientEmail} = req.body;

    // Check if recipientEmail is defined and not empty
    if (!recipientEmail) {
      return res.status(400).json({ error: 'Recipient email is required' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: pass,
      },
    });

    const mailOptions = {
      from: email,
      to: recipientEmail,
      subject: 'Messate From Shabaas Contact Form',
      html: `
      
      <table>
        <tr style="background:#008AFB ; color:#fff">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
        </tr>
        <tr>
          <td>${req.body.name}</td>
          <td>${req.body.email}</td>
          <td>${req.body.mobile}</td>
          <td>${req.body.message}</td>
        </tr>

      </table>
      
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Form Fillup successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Form Fillup Failed ' });
  }
}
