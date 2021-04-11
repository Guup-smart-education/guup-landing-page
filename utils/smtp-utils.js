import nodemailer from 'nodemailer'

// Smtp config
// const smtp = require('../configs/smtp/smtp.json')

const emailTransporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	secure: true,
	auth: {
		user: process.env.EMAIL_AUTH_SENDER,
		pass: process.env.EMAIL_AUTH_PASSWORD,
	},
})

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
