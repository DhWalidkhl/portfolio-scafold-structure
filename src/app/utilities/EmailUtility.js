import nodemailer from 'nodemailer';
import {EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_USER} from "../config/config.js";

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

	let  transport= nodemailer.createTransport({
		host: EMAIL_HOST,
		port: EMAIL_PORT,
		secure:false,
		auth:{user:EMAIL_USER,pass: EMAIL_PASSWORD},
		tls:{rejectUnauthorized:false}
	})


	let mailOption={
		from:'D H Walid <sm.walid69@yahoo.com>',
		to:EmailTo,
		subject:EmailSubject,
		text:EmailText
	}

	return await transport.sendMail(mailOption)
}
export default EmailSend;