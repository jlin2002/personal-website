const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
    let data = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'joannalin.inquiries@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    transporter.sendMail({
        replyTo: data.name === ''? data.email: `${data.name} <${data.email}>`,
        to: 'Joanna Lin <joannalin.inquiries@gmail.com>',
        subject: data.subject,
        html: `Email from ${data.name} ${data.email}:<br/>
        ${data.message}`
    }, (error) => {
        if (error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
            });
        }
    });
}