import { useState, useEffect } from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { UIContainer, UIText, UIInput, UIButton } from '../../ui'
import { CHeader, CCheckBoxList } from '../../components'
import { useForm } from 'react-hook-form'
import {
	GoogleReCaptcha,
	GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3'
import styles from './_contact.module.scss'
import { variants } from './../../helper/animations'

const Contact = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [captchToken, setCaptchToken] = useState()
	const [requestSended, setRequestSended] = useState(false)
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isValid },
	} = useForm()

	useEffect(() => {
		console.log('errors: ', errors)
		return () => {}
	}, [errors])

	useEffect(async () => {
		if (requestSended) {
			await controlForm.start(variantFadeOut.hidden)
			await controlSuccess.start(variantFadeIn.visible)
		}
		return () => {}
	}, [requestSended])

	const onSubmitForm = async (data) => {
		if (requestSended) {
			return
		}
		setLoading(true)
		if (!data || !captchToken) return
		try {
			await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({ ...data, captchToken }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			setRequestSended(true)
		} catch (error) {
			console.log('onSubmitEr')
		} finally {
			setLoading(false)
		}
	}

	const verifyCaptcha = (token) => setCaptchToken(token)

	// Animations
	const controlForm = useAnimation()
	const controlSuccess = useAnimation()
	const {
		variantTextTranslate,
		variantTextFadein,
		variantFadeIn,
		variantFadeOut,
	} = variants

	return (
		<div className=''>
			<UIContainer>
				<CHeader />
			</UIContainer>
			<UIContainer>
				<div className={classnames(styles['guup-contact_container'])}>
					<div className='columns is-desktop'>
						<div className='column column is-12-mobile is-8-tablet is-offset-2-tablet is-offset-0-desktop is-4-tablet is-5-widescreen'>
							<div className='columns is-desktop mb-2'>
								<div className='column is-10'>
									<div className='is-flex is-flex-wrap-wrap'>
										{['Tenho', 'interesse'].map((item, i) => (
											<div
												className='is-overflow-hidden'
												key={`title-contact-ani-${item.length * (i + 1)}`}
											>
												<motion.div
													custom={i}
													initial='hidden'
													animate='visible'
													variants={variantTextTranslate}
												>
													<UIText type='subtitle' color='dark' weight='bold'>
														{item}
													</UIText>
												</motion.div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className='mb-2'>
								<motion.div
									custom={3}
									initial='hidden'
									animate='visible'
									variants={variantTextFadein}
								>
									<UIText type='paragraph'>
										Se você tem interesse em mudar a forma de se comunicar com a
										sua comunidade, envie um oi para a gente, queremos entender
										tuas necessidades.
									</UIText>
								</motion.div>
							</div>
							<div className='mt-4'>
								<motion.div
									custom={4}
									initial='hidden'
									animate='visible'
									variants={variantTextFadein}
								>
									<UIText
										type='common'
										color='primary'
										weight='bold'
										onPress={() => router.push('/')}
									>
										Guup smart platform
									</UIText>
								</motion.div>
							</div>
						</div>
						<div className='column is-12-mobile is-8-tablet is-offset-2-tablet is-5-desktop is-offset-1-desktop is-relative'>
							{requestSended && (
								<motion.div
									initial='hidden'
									variants={variantFadeIn}
									animate={controlSuccess}
								>
									<div
										className={classnames(
											styles['guup-contact_form__success'],
											'is-flex is-justify-content-center is-align-items-center'
										)}
									>
										<div
											className={classnames(
												styles['message'],
												'has-text-centered mb-6'
											)}
										>
											<div className='is-overflow-hidden'>
												<motion.div
													custom={1}
													initial='hidden'
													animate='visible'
													variants={variantTextTranslate}
												>
													<span className={styles['emoticon']}>👍</span>
												</motion.div>
											</div>
											<div className='is-overflow-hidden'>
												<motion.div
													custom={2}
													initial='hidden'
													animate='visible'
													variants={variantTextTranslate}
												>
													<UIText type='header'>Obrigado!! </UIText>
												</motion.div>
											</div>
											<motion.div
												custom={3}
												initial='hidden'
												animate='visible'
												variants={variantTextFadein}
											>
												<UIText type='common'>
													Em alguns instantes você receberá um e-mail de boas
													vindas. Muito obrigado pelo seu interesse.
												</UIText>
											</motion.div>
											<motion.div
												custom={4}
												initial='hidden'
												animate='visible'
												variants={variantTextFadein}
											>
												<div className='mt-5 mr-4'>
													<UIButton onPress={() => router.push('/')}>
														{'<'} Voltar
													</UIButton>
												</div>
											</motion.div>
										</div>
									</div>
								</motion.div>
							)}
							<motion.form
								className={classnames(
									styles['guup-contact_form'],
									'pt-6 pb-6 pl-5 pr-5'
								)}
								onSubmit={handleSubmit(onSubmitForm)}
								initial='visible'
								variants={variantFadeOut}
								animate={controlForm}
							>
								<GoogleReCaptchaProvider
									reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_SIDE_KEY}
								>
									<GoogleReCaptcha onVerify={verifyCaptcha} />
								</GoogleReCaptchaProvider>
								<div
									className={classnames(
										styles['guup-contact_form__input'],
										'mb-4'
									)}
								>
									<div
										className={classnames(
											styles['guup-contact_form__input-label'],
											'mb-4'
										)}
									>
										<UIText weight='bold' color='dark' type='common'>
											Eu sou:{' '}
										</UIText>
									</div>
									<div
										className={classnames(
											styles['guup-contact_form__input-val'],
											'mb-4',
											'ml-2'
										)}
									>
										<CCheckBoxList
											{...{
												name: 'type',
												setValue,
												register,
												list: [
													{
														label:
															'Um criador de conteúdos, quero ter a minha propria rede',
														value: 'CONTENT_MAKER',
													},
													{
														label:
															'Uma empresa interessada, quero melhorar a comunicação na minha empresa',
														value: 'COMPANY',
													},
													{
														label:
															'Um curioso, tenho interesse em saber mais sobre o produto',
														value: 'CURIOUS',
													},
												],
												validation: {
													required: true,
												},
												disabled: loading,
												errors,
											}}
										/>
									</div>
								</div>
								<div className={classnames(styles['guup-contact_form__input'])}>
									<div
										className={classnames(
											styles['guup-contact_form__input-label'],
											'mb-4'
										)}
									>
										<UIText weight='bold' color='dark' type='common'>
											Meu e-mail é:
										</UIText>
									</div>
									<div className='ml-2'>
										<UIInput
											{...{
												placeholder: 'Digite teu e-mail aqui',
												register,
												name: 'email',
												validation: {
													required: true,
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message: 'E-mail inválido, tente novamente',
													},
												},
												type: 'text',
												errors,
												disabled: loading,
											}}
										/>
									</div>
								</div>
								<div className='mt-6'>
									<UIButton
										{...{
											type: requestSended ? 'button' : 'submit',
											disabled: loading || requestSended,
										}}
									>
										Enviar meu interesse
									</UIButton>
								</div>
								<div className='mt-4'>
									<UIText type='label' color='grey'>
										Cadastre-se para receber novidades do Guup, sua plataforma
										privada de comunicação
									</UIText>
								</div>
							</motion.form>
						</div>
					</div>
				</div>
			</UIContainer>
		</div>
	)
}

export default Contact
