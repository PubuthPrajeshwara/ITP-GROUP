const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pathu.help@gmail.com',
    pass: 'efix ikmt legc qfln',
  },
});

// Define a function to send the email
const sendEmail = async (email, subject, text, qrCodeData) => {
  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: 'pathu.help@gmail.com',
      to: email,
      subject: subject,                 
      text: text,
      attachments: [{
        filename: 'qr_code.jpg',
        content: qrCodeData, // This should be the data of the QR code image
        encoding: 'base64', // Encoding type of the attachment
      }]
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
