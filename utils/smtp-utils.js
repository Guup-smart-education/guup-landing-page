import nodemailer from 'nodemailer'

// Smtp config
const smtp = require('../configs/smtp/smtp.json')

const emailTransporter = nodemailer.createTransport(smtp)

export const sendGuupEmail = (data) => {
	return emailTransporter.sendMail(
		{
			success: true,
			from: process.env.EMAIL_AUTH_SENDER,
			...data,
		},
		(error, info) => ({ error, info })
	)
}