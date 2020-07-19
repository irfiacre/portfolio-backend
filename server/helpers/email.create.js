import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default (message, email,subject ) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    transporter.sendMail({
      from: process.env.EMAIL,
      to: `${email}`,
      subject: `${subject}`,
      html: `${message}`,
    });

    const messageBack = `Email sent to ${process.env.MY_INBOX} successful`;
    return {
      status: 200,
      emailSent:true,
      message: messageBack,
    }
  }
  catch (err) {
    const error = `Failed sending email to ${process.env.MY_INBOX}, Please try again!`;
    return {
      status: 500,
      emailSent:false,
      message: error,
    }
  }
};
