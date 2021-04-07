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
				<link rel='icon' href='/favicon.ico' />
				<link rel='preload' href='/fonts/museo/museo.woff' as='font' />
			</Head>
			<div
				className={classnames(
					styles['guup-header'],
					'is-flex',
					'is-align-content-center is-justify-content-space-between'
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
				<ul className={classnames(styles['guup-menu'], 'is-flex')}>
					<li className={classnames(styles['guup-menu-item'])}>Sobre</li>
					<li className={classnames(styles['guup-menu-item'])}>Treinamentos</li>
					<li className={classnames(styles['guup-menu-item'])}>Comunicação</li>
					<li className={classnames(styles['guup-menu-item'])}>
						Personalidade
					</li>
					<li className={classnames(styles['guup-menu-item'])}>
						Tenho interesse
					</li>
				</ul>
			</div>
		</>
	)
}

CHeader.propTypes = {}

export default CHeader
