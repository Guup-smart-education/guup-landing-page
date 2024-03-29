import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import classnames from 'classnames'
import Image from 'next/image'
import styles from './_header.module.scss'

const CHeader = () => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Guup smart platform</title>
				<meta property='og:url' content='https://www.guupse.com' />
				<meta property='og:site_name' content='Guupse' />
				<meta property='og:title' content='Guup smart platform' />
				<meta
					property='og:description'
					content='Um espaço moderno para se comunicar e empoderar equipes de forma inteligente. Conteúdos digitais, bate papos ao vivo, treinamentos 24h ao dia & Tudo em uma plataforma que se adapta ao seu negócio.'
				/>
				<meta
					property='og:image'
					content='https://firebasestorage.googleapis.com/v0/b/landing-page-29d05.appspot.com/o/guupse-coloroud-link.jpg?alt=media&token=18a6745e-cdf1-4b89-9227-ab11baab903c'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preload' href='/fonts/museo/museo.woff' as='font' />
			</Head>
			<div
				className={classnames(
					styles['guup-header'],
					'is-flex is-align-content-center is-justify-content-space-between'
				)}
			>
				<div className='is-flex ' onClick={() => router.push('/')}>
					<Image
						src='/guup-icon-coloured.svg'
						alt='guup smart education'
						width='36'
						height='36'
					/>
				</div>
				{/* <ul className={classnames(styles['guup-menu'], 'is-flex')}>
					<li className={classnames(styles['guup-menu-item'])}>Sobre</li>
					<li className={classnames(styles['guup-menu-item'])}>Treinamentos</li>
					<li className={classnames(styles['guup-menu-item'])}>Comunicação</li>
					<li className={classnames(styles['guup-menu-item'])}>
						Personalidade
					</li>
					<li className={classnames(styles['guup-menu-item'])}>
						Tenho interesse
					</li>
				</ul> */}
			</div>
		</>
	)
}

CHeader.propTypes = {}

export default CHeader
