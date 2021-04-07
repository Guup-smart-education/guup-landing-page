import { useState, useEffect } from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import { UIContainer, UIText, UIInput, UIButton } from '../../ui'
import { CHeader, CCheckBoxList } from '../../components'
import { useForm } from 'react-hook-form'
import styles from './_contact.module.scss'

const Contact = () => {
	const [loading, setLoading] = useState(false)
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
	const onSubmitForm = (data) => {
		console.log('data: ', data)
		setLoading(true)
		new Promise((resolve, reject) => {
			setTimeout(() => {
				setLoading(false)
			}, 3000)
		})
	}

	return (
		<div className=''>
			<UIContainer>
				<CHeader />
			</UIContainer>
			<UIContainer>
				<div className={classnames(styles['guup-contact_container'])}>
					<div className='columns'>
						<div className='column is-5'>
							<div className='columns mb-2'>
								<div className='column is-10'>
									<UIText type='subtitle'>Tenho interesse 👌</UIText>
								</div>
							</div>
							<div className='mb-2'>
								<UIText type='paragraph'>
									Se você tem interesse em mudar a forma de se comunicar com a
									sua comunidade, envie um oi para a gente, queremos entender
									tuas necessidades.
								</UIText>
							</div>
							<form
								className={classnames(styles['guup-contact_form'], 'mt-6')}
								onSubmit={handleSubmit(onSubmitForm)}
							>
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
												name: 'people',
												setValue,
												register,
												list: [
													{
														label:
															'Um criador de conteudos, quero ter a minha propria rede',
														value: 1,
													},
													{
														label:
															'Uma empresa interessada, quero melhorar a comunicação na minah empresa',
														value: 2,
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
									<UIButton {...{ type: 'submit', disabled: loading }}>
										Enviar meu interesse
									</UIButton>
								</div>
							</form>
						</div>
						<div className='column is-5 is-offset-1 is-flex is-flex-direction-column is-justify-content-center'>
							<Image
								src='/guup-contact-art.png'
								alt='Enterprise comunication'
								height='603'
								width='741 '
								priority
							/>
						</div>
					</div>
				</div>
			</UIContainer>
		</div>
	)
}

export default Contact
