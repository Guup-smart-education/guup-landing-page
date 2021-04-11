// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from 'node-fetch'
import { sendGuupEmail } from '../../utils/smtp-utils'
import contactEmailTemplate from './../../templates/contactEmail'
import admin from '../../utils/db-utils'

export default async (req, res) => {
	try {
		const { email, type, captchToken } = req.body
		if (!email || !captchToken) {
			return res.status(422).json({
				message: 'Please, provide a required fields for this requistion',
			})
		}
		const verifyCaptch = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${captchToken}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
				},
			}
		)
		const catchaValidation = await verifyCaptch.json()
		if (!catchaValidation.success) {
			return res.status(422).json({
				message: 'Invalid captcha code, please try again',
			})
		}
		await sendGuupEmail({
			to: email,
			subject: 'Obrigado',
			html: contactEmailTemplate,
		})
		await admin
			.collection('leads')
			.add({ email, type })
			.then((response) => {
				console.log('admin response: ', response)
			})
			.catch((e) => console.log('admin error: ', e))
		res.json({ success: true })
		res.status(200).end()
	} catch (error) {
		res.json({ error: true })
		res.status(422).send(`Contact email error: ${error.message}`)
	}
	return res.status(404).send('Not found')
}
