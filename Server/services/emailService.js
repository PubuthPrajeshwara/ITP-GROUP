 

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nadumgamage232@gmail.com',
        pass: 'Nadun2121'
    }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
    try {
        // Send email using the transporter
        await transporter.sendMail({
            from: 'pavithrameddaduwage@gmail.com',
            to,
            subject,
            text,
            html
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Export the sendEmail function
module.exports = { sendEmail };
