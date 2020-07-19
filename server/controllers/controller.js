import pool from '../config/db_config';
import sendEmail from '../helpers/email.create';
import emailTemplate from '../helpers/templates/emailMessage';
import confirmationEmailTemplate from '../helpers/templates/confirmationEmailMessage';
// controller
export default async (req, res) => {
 
  const message = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    message: req.body.message,
  };

  const inserterSql = 'INSERT INTO messages(name,address,email,message) VALUES($1,$2,$3,$4) RETURNING *;';
  
  const subject = 'Portfolio Message';
 
  
  const { rows } = await pool.query(inserterSql,
    [message.name, message.address, message.email, message.message]);

  const findMessage = rows.find((obj) => obj.id);
  const myEmail=process.env.MY_INBOX;
  const senderEmail = message.email;
  
  const emailSend = sendEmail(
    emailTemplate(message.name, message.address, message.email, message.message, findMessage.created_on),
    myEmail,
    subject,
  );
  const confirmationEmail = sendEmail(
    confirmationEmailTemplate(),
    senderEmail,
    subject,
  );
  
  res.status(201).json({
    status: 201,
    data: {
      message:{
        name:findMessage.name,
        message:findMessage.message,
        myEmailSent: emailSend.emailSent,
        senderEmailSent: confirmationEmail.emailSent,
      }
    },
  });
};
