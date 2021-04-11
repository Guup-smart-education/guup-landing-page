import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, transform, useAnimation } from 'framer-motion'
import classnames from 'classnames'
// Simple components
import { UIContainer, UIText, UIButton, UIListItem, UIBurble } from './../ui'
// Complex components
import { CHeader } from './../components'
// App style
import styles from './_app.module.scss'
import { variants } from './../helper/animations'

const ContactLink = () => {
	const router = useRouter()
	const navigateTo = (e, link) => {
		e.preventDefault()
		router.push(link || '/')
	}
	return (
		<UIButton preset='dark' onPress={(e) => navigateTo(e, 'contact')}>
			Tenho interesse
		</UIButton>
	)
}

const Home = () => {
	// State
	const [scrollYPosition, setScrollYPosition] = useState(0)
	const [windowHeigth, setWindowHeigth] = useState(0)
	const [fadeInAnimations, setFadeInAnimations] = useState({})
	const [isAnimatingChannel, setIsAnimatingChannel] = useState(false)
	const [isAnimatingHelp, setIsAnimatingHelp] = useState(false)
	const [isAnimatingSocial, setIsAnimatingSocial] = useState(false)
	const [isAnimatingPersonalite, setIsAnimatingPersonalite] = useState(false)
	// Reference
	const refTitleChannel = useRef()
	const refTitleHelp = useRef()
	const refTitleSocial = useRef()
	const refTitlePersonalite = useRef()
	// Animations
	// Animation > Channel
	const controlAnimationChannel = useAnimation()
	const controlAnimationTitleChannel = useAnimation()
	const controlAnimationDescChannel = useAnimation()
	// Animation > Help
	const controlAnimationHelp = useAnimation()
	const controlAnimationTitleHelp = useAnimation()
	// Animations > Social
	const controlAnimationSocial = useAnimation()
	const controlAnimationTitleSocial = useAnimation()
	const controlAnimationDescSocial = useAnimation()
	// Animations > Personalite
	const controlAnimationPersonalite = useAnimation()
	const controlAnimationTitlePersonalite = useAnimation()
	const controlAnimationDescPersonalite = useAnimation()
	// Animation > Variants
	const {
		variantBlockFadein,
		variantTextTranslate,
		variantTextFadein,
		variantImageTranslate,
	} = variants
	// Effects
	useEffect(() => {
		setFadeInAnimations({
			channel:
				parseInt(refTitleChannel.current.getBoundingClientRect().top) + 200,
			help: parseInt(refTitleHelp.current.getBoundingClientRect().top) + 200,
			social:
				parseInt(refTitleSocial.current.getBoundingClientRect().top) + 200,
			personalite: parseInt(
				refTitlePersonalite.current.getBoundingClientRect().top + 200
			),
		})
		return () => {}
	}, [refTitleChannel, refTitleSocial, refTitlePersonalite])
	useEffect(async () => {
		if (
			scrollYPosition + windowHeigth - fadeInAnimations.channel >= 0 &&
			!isAnimatingChannel
		) {
			setIsAnimatingChannel(true)
			controlAnimationChannel.start(variantBlockFadein.visible)
			await controlAnimationTitleChannel.start(variantTextTranslate.visible)
			await controlAnimationDescChannel.start(variantTextFadein.visible)
			setIsAnimatingChannel(false)
		}
		if (
			scrollYPosition + windowHeigth - fadeInAnimations.help >= 0 &&
			!isAnimatingHelp
		) {
			setIsAnimatingHelp(true)
			controlAnimationHelp.start(variantBlockFadein.visible)
			await controlAnimationTitleHelp.start(variantTextTranslate.visible)
			setIsAnimatingHelp(false)
		}
		if (
			scrollYPosition + windowHeigth - fadeInAnimations.social >= 0 &&
			!isAnimatingSocial
		) {
			setIsAnimatingSocial(true)
			controlAnimationSocial.start(variantBlockFadein.visible)
			await controlAnimationTitleSocial.start(variantTextTranslate.visible)
			await controlAnimationDescSocial.start(variantTextFadein.visible)
			setIsAnimatingSocial(false)
		}
		if (
			scrollYPosition + windowHeigth - fadeInAnimations.personalite >= 0 &&
			!isAnimatingPersonalite
		) {
			setIsAnimatingPersonalite(true)
			controlAnimationPersonalite.start(variantBlockFadein.visible)
			await controlAnimationTitlePersonalite.start(variantTextTranslate.visible)
			await controlAnimationDescPersonalite.start(variantTextFadein.visible)
			setIsAnimatingPersonalite(false)
		}
		return () => {}
	}, [scrollYPosition])
	// Handlers
	const onScroll = (e) => setScrollYPosition(window.pageYOffset)
	// check scroll event
	useEffect(() => {
		console.log('window')
		window.addEventListener('scroll', onScroll, { passive: true })
		setWindowHeigth(window.innerHeight)
		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return (
		<div className={styles['guup-section__container']}>
			<div>
				<UIContainer>
					<CHeader />
				</UIContainer>
			</div>
			<div className={classnames(styles['guup-section__home'], 'is-relative')}>
				<UIContainer>
					<div className={classnames(styles['guup-body'])}>
						<div className='columns is-desktop'>
							<div className='column is-12-mobile is-9-tablet is-offset-1-tablet is-offset-0-desktop is-4-tablet is-5-widescreen is-flex is-flex-direction-column is-justify-content-center'>
								<div className='is-flex is-flex-wrap-wrap'>
									{[
										'Guup ',
										'uma forma',
										'inteligente',
										'de',
										'se',
										'comunicar',
									].map((item, i) => (
										<div
											className='is-overflow-hidden'
											key={`title-channel-ani-${item.length * (i + 1)}`}
										>
											<motion.div
												custom={i}
												initial='hidden'
												variants={variantTextTranslate}
												animate={{ translateY: 0 }}
												transition={{
													duration: 0.36,
													ease: 'easeInOut',
													delay: 0.08 * i,
												}}
											>
												<UIText type='subtitle' color='dark' weight='bold'>
													{item}
												</UIText>
											</motion.div>
										</div>
									))}
								</div>
								<motion.div
									custom={5}
									initial='hidden'
									animate='visible'
									variants={variantTextFadein}
									className='mt-5 mb-6'
								>
									<UIText type='paragraph'>
										Um espaço moderno para se comunicar e empoderar equipes de
										forma inteligente. Conteúdos digitais, bate papos ao vivo,
										treinamentos 24h ao dia. & Tudo em uma plataforma que se
										adapta ao seu negócio.
									</UIText>
								</motion.div>
								<motion.div
									custom={6}
									initial='hidden'
									animate='visible'
									variants={variantTextFadein}
								>
									<ContactLink />
									<div className='columns mt-1'>
										<div className='column is-half'>
											<UIText type='label' color='grey'>
												Cadastre-se para saber como nós podemos te ajudar
											</UIText>
										</div>
									</div>
								</motion.div>
							</div>
							<div
								className={classnames(
									styles['guup-image-right'],
									'column is-12-mobile is-12-tablet is-7-widescreen is-flex is-align-items-center is-justify-content-center is-relative'
								)}
							>
								<motion.div
									custom={2}
									initial='hidden'
									animate='visible'
									variants={variantImageTranslate}
								>
									<Image
										src='/guup-burbles-colors.png'
										alt='Burble multi color'
										layout='fill'
										style={{
											bottom: 0,
											left: 0,
											top: 0,
											right: 0,
											zIndex: -1,
										}}
									/>
									<Image
										src='/guup-onboarding-art-3.png'
										alt='Enterprise comunication'
										height='1000'
										width='1000'
										priority
									/>
								</motion.div>
							</div>
						</div>
					</div>
				</UIContainer>
			</div>
			<div
				className={classnames(
					styles['guup-section__features'],
					'is-relative',
					'has-background-white'
				)}
			>
				<UIContainer>
					<motion.div
						ref={refTitleChannel}
						initial='hidden'
						animate={controlAnimationChannel}
						variants={variantBlockFadein}
					>
						<div className='columns'>
							<div className='column is-12-mobile is-9-tablet is-offset-1-tablet is-offset-0-desktop is-8-tablet is-8-desktop is-8-widescreen is-10-fullhd'>
								<motion.div
									initial='hidden'
									variants={variantTextTranslate}
									animate={controlAnimationTitleChannel}
								>
									<UIText type='label' color='grey'>
										Guup channel
									</UIText>
								</motion.div>
								<div className='is-flex is-flex-wrap-wrap'>
									{['Treinamentos', 'ao alcance', 'da sua', 'mão ✋'].map(
										(item, i) => (
											<div
												className='is-overflow-hidden'
												key={`title-channel-${item.length}-${i}`}
											>
												<motion.div
													custom={i}
													initial={{ translateY: 100 }}
													animate={controlAnimationTitleChannel}
												>
													<UIText type='subtitle' color='dark' weight='bold'>
														{item}
													</UIText>
												</motion.div>
											</div>
										)
									)}
								</div>
							</div>
						</div>
						<div className='columns is-centered mb-2'>
							<div className='column is-10'>
								<Image
									src='/guup-arrow-2.png'
									alt='Arrow dropdown'
									height='60'
									width='300'
								/>
							</div>
						</div>
						<div className='columns is-desktop'>
							<div
								className={classnames(
									styles['guup-image-left'],
									'column is-12-mobile is-12-tablet is-7-widescreen is-7-fullhd is-relative'
								)}
							>
								<motion.div
									custom={2}
									initial='hidden'
									animate='visible'
									variants={variantImageTranslate}
								>
									<Image
										src='/guup-burbles-colors-2.png'
										alt='Burble purple'
										layout='fill'
										style={{
											bottom: 0,
											left: 0,
											top: 0,
											right: 0,
											zIndex: -9999,
										}}
									/>
									<Image
										src='/guup-live-art-2.png'
										alt='Enterprise live meeting'
										height='1000'
										width='1000'
										priority
									/>
								</motion.div>
							</div>
							<div className='column is-12-mobile is-8-mobile is-8-tablet is-offset-2-tablet is-5-widescreen is-offset-0-desktop is-5-fullhd is-flex is-flex-direction-column is-justify-content-center'>
								<motion.div
									initial='hidden'
									animate={controlAnimationDescChannel}
									variants={variantTextFadein}
								>
									<UIText type='paragraph'>
										Crie e compartilhe conteúdos digitais dentro de um espaço
										dedicado ao streaming de vídeo de qualidade disponível as
										24h e acessível desde qualquer lugar.
									</UIText>
								</motion.div>
								<div className='mt-5 mb-4'>
									{[
										{
											image: '/guup-icon-diamond.png',
											description:
												'Conteúdos de qualidade personalizados para a sua comunidade',
											label: 'Personalidade',
										},
										{
											image: '/guup-icon-hours.png',
											description:
												'Conteúdos acessíveis desde qualquer lugar e em qualquer momento',
											label: 'Disponibilidade',
										},
										{
											image: '/guup-icon-live.png',
											description:
												'Faça transmissões ao vivo em uma plataforma totalmente privada',
											label: 'Ao vivo',
										},
									].map(({ image, description, label }, i) => (
										<motion.div
											custom={i + 1}
											initial='hidden'
											animate={controlAnimationDescChannel}
											variants={variantTextFadein}
										>
											<UIListItem {...{ image, description, label }} />
										</motion.div>
									))}
								</div>
								<motion.div
									custom={4}
									initial='hidden'
									animate={controlAnimationDescChannel}
									variants={variantTextFadein}
									className='mt-2'
								>
									<ContactLink />
								</motion.div>
							</div>
						</div>
					</motion.div>
					<motion.div
						ref={refTitleHelp}
						initial='hidden'
						animate={controlAnimationHelp}
						variants={variantBlockFadein}
					>
						<div className='columns is-centered pt-2'>
							<div className='column is-flex is-flex-direction-column is-align-items-center'>
								<Image
									src='/guup-arrow-3.png'
									alt='Comunicacao empresarial'
									height='277'
									width='110'
								/>
							</div>
						</div>
						<div className='columns is-centered'>
							<div className='column is-8 has-text-centered'>
								<div className='is-flex is-flex-wrap-wrap is-justify-content-center'>
									{[
										'Quer',
										'organizar',
										'a comunicação',
										'da sua',
										'equipe',
										'e não',
										'sabe',
										'como 🤔?',
									].map((item, i) => (
										<div
											className='is-overflow-hidden'
											key={`title-help-${item.length}-${i}`}
										>
											<motion.div
												custom={i}
												initial='hidden'
												animate={controlAnimationTitleHelp}
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
						<div className='columns is-centered pb-2'>
							<div className='column is-flex is-flex-direction-column is-align-items-center'>
								<Image
									src='/guup-arrow-4.png'
									alt='Arrow dropdown'
									height='338'
									width='170'
								/>
							</div>
						</div>
					</motion.div>
					<motion.div
						ref={refTitleSocial}
						initial='hidden'
						animate={controlAnimationHelp}
						variants={variantBlockFadein}
					>
						<div className='columns'>
							<div className='column is-12-mobile is-9-tablet is-offset-1-tablet is-offset-0-desktop is-9-desktop is-offset-3-desktop'>
								<motion.div
									initial='hidden'
									variants={variantTextTranslate}
									animate={controlAnimationTitleSocial}
								>
									<UIText type='label' color='grey'>
										Guup social
									</UIText>
								</motion.div>
								<div className='is-flex is-flex-wrap-wrap'>
									{['Comunicação', 'privada', 'para', 'sua comunidade'].map(
										(item, i) => (
											<div className='is-overflow-hidden'>
												<motion.div
													custom={i}
													initial='hidden'
													variants={variantTextTranslate}
													animate={controlAnimationTitleSocial}
												>
													<UIText type='subtitle' color='dark' weight='bold'>
														{item}
													</UIText>
												</motion.div>
											</div>
										)
									)}
								</div>
							</div>
						</div>
						<div className='columns is-desktop mt-4'>
							<div
								className={classnames(
									styles['guup-image-right'],
									'column is-12-mobile is-12-tablet is-7-desktop is-relative'
								)}
							>
								<Image
									src='/guup-burbles-colors-3.png'
									alt='Burble color pink'
									layout='fill'
									style={{
										bottom: 0,
										left: 0,
										top: 0,
										right: 0,
										zIndex: -1,
									}}
								/>
								<Image
									src='/guup-podcast-art-2.png'
									alt='Enterprise private social'
									height='1000'
									width='1000'
									priority
								/>
							</div>
							<div className='column is-12-mobile is-8-mobile is-8-tablet is-offset-2-tablet is-5-widescreen is-offset-0-desktop is-5-fullhd pr-6 is-flex is-flex-direction-column is-justify-content-center'>
								<motion.div
									initial='hidden'
									animate={controlAnimationDescSocial}
									variants={variantTextFadein}
								>
									<UIText type='paragraph'>
										Tenha um espaço para falar com a sua equipe, para
										compartilhar noticias, criar bate papos ao vivo, anuncie a
										chegada de um novo colaborador e/ou os logros da sua
										empresa, seja transparente com a sua equipe!!
									</UIText>
								</motion.div>
								<div className='mt-5 mb-4'>
									{[
										{
											image: '/guup-icon-microphone.png',
											description:
												'Bate papos ao vivo para falar de qualquer assunto e em qualquer momento',
											label: 'Bate papo',
										},
										{
											image: '/guup-icon-chat.png',
											description:
												'Fale com seus colaboradores com a nosso chat privado e personalizado',
											label: 'Chat',
										},
										{
											image: '/guup-icon-news.png',
											description:
												'Crie um ambiente transparente com o nosso espaço de notícias e conteúdos',
											label: 'Noticias',
										},
									].map(({ image, description, label }, i) => (
										<motion.div
											custom={i + 1}
											initial='hidden'
											animate={controlAnimationDescSocial}
											variants={variantTextFadein}
										>
											<UIListItem {...{ image, description, label }} />
										</motion.div>
									))}
								</div>
								<div className='mt-2'>
									<motion.div
										custom={4}
										initial='hidden'
										animate={controlAnimationDescSocial}
										variants={variantTextFadein}
									>
										<ContactLink />
									</motion.div>
								</div>
							</div>
						</div>
						<div className='columns'>
							<div className='column is-6 is-flex is-flex-direction-column is-align-items-center'>
								<Image
									src='/guup-arrow-5.png'
									alt='Dropdown arrow'
									height='338'
									width='170'
								/>
							</div>
						</div>
					</motion.div>
				</UIContainer>
			</div>
			<div className='is-relative is-overflow-hidden'>
				<Image
					src='/guup-burbles-colors-4.png'
					alt='Burble coloured background'
					layout='fill'
					priority
					style={{
						bottom: 0,
						left: 0,
						top: 0,
						right: 0,
						zIndex: -1,
					}}
				/>
				<div
					className={classnames(
						styles['guup-section__custom'],
						'is-relative',
						'has-background-ligth'
					)}
				>
					<UIContainer>
						<motion.div
							ref={refTitlePersonalite}
							initial='hidden'
							animate={controlAnimationPersonalite}
							variants={variantBlockFadein}
						>
							<div className='columns is-desktop'>
								<div className='column is-12-mobile is-9-tablet is-offset-1-tablet is-offset-0-desktop is-5-desktop'>
									<div className='columns'>
										<div className='column is-10' ref={refTitlePersonalite}>
											<motion.div
												initial='hidden'
												animate={controlAnimationTitlePersonalite}
												variants={variantTextTranslate}
											>
												<UIText type='label' color='grey'>
													Personalidade
												</UIText>
											</motion.div>
											<div className='is-flex is-flex-wrap-wrap'>
												{['Um lugar', 'para', 'a sua', 'marca'].map(
													(item, i) => (
														<div
															className='is-overflow-hidden'
															key={`title-personalite-${item.length}-${i}`}
														>
															<motion.div
																custom={i}
																initial='hidden'
																animate={controlAnimationTitlePersonalite}
																variants={variantTextTranslate}
															>
																<UIText
																	type='subtitle'
																	color='dark'
																	weight='bold'
																>
																	{item}
																</UIText>
															</motion.div>
														</div>
													)
												)}
											</div>
										</div>
									</div>
									<div className='mb-4 mt-4 pr-6'>
										<motion.div
											initial='hidden'
											animate={controlAnimationDescPersonalite}
											variants={variantTextFadein}
										>
											<UIText type='paragraph'>
												Personalize seu espaço social com a identidade visual da
												sua comunidade, no final o Guup é uma plataforma que se
												adapta as suas necessidades
											</UIText>
										</motion.div>
									</div>
									<div className='mt-6'>
										<motion.div
											custom={1}
											initial='hidden'
											animate={controlAnimationDescPersonalite}
											variants={variantTextFadein}
										>
											<ContactLink />
										</motion.div>
									</div>
								</div>
								<div
									className={classnames(
										styles['guup-image-right'],
										'column is-12-mobile is-12-tablet is-7-desktop is-relative'
									)}
								>
									<Image
										src='/guup-brand-art-2.png'
										alt='Enterprise custom brand'
										height='1000'
										width='1000'
										priority
									/>
								</div>
							</div>
						</motion.div>
					</UIContainer>
				</div>
				<div className={styles['guup-section__mkt']}>
					<UIContainer>
						<div className='columns is-centered'>
							<div className='column is-8 has-text-centered'>
								<UIText type='subtitle' color='light' weight='bold'>
									Guup, um espaço para sua comunidade
								</UIText>
							</div>
						</div>
						<div className='columns is-centered'>
							<div className='column is-5 has-text-centered'>
								<UIText type='paragraph' color='light'>
									Quer mudar a forma de se comunicar e gerenciar a sua equipe?
									entre em contato com a gente 😉
								</UIText>
							</div>
						</div>
						<div className='columns is-centered pt-5'>
							<div className='column mt-5 is-flex is-justify-content-center'>
								<ContactLink />
							</div>
						</div>
					</UIContainer>
				</div>
			</div>
			<div className={styles['guup-section__footer']}>
				<UIContainer>
					<div className='columns is-flex'>
						<div className='column is-4 is-flex'>
							<div className='is-flex is-flex-direction-column is-justify-content-space-between'>
								<div>
									<UIText>
										Formas inteligentes de compartilhar conhecimento e manter a
										sua comunicação em um lugar só
									</UIText>
								</div>
								<div>
									<Image src='/guup-icon-large.svg' width='140' height='55' />
									<UIText>
										2021 Guup smart platform - todos os direitos reservados
									</UIText>
								</div>
							</div>
						</div>
						<div className='column is-2 is-offset-6 has-text-right'>
							<UIText weight='bold'>Plataforma</UIText>
							<UIText isLink onPress={() => console.log('Tenho interesse')}>
								Tenho interesse
							</UIText>
							<UIText isLink onPress={() => console.log('Personalidade')}>
								Voltar ao inicio
							</UIText>
							{/* <UIText isLink onPress={() => console.log('Comunicação')}>
								Comunicação
							</UIText>
							<UIText isLink onPress={() => console.log('Treinamentos')}>
								Treinamentos
							</UIText>
							<UIText isLink onPress={() => console.log('Sobre')}>
								Sobre
							</UIText> */}
						</div>
					</div>
				</UIContainer>
			</div>
		</div>
	)
}

export default Home
