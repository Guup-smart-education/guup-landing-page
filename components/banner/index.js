import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './_banner.module.scss'
import { v4 } from 'uuid'
import { UIText } from './../../ui'

const CBanner = ({ data }) => {
	const [currentBanner, setCurrentBanner] = useState(null)
	const [page, setPage] = useState(0)
	const [formatData, setFormatData] = useState([])
	const controls = useAnimation()
	// Setting formated data
	useEffect(() => {
		setFormatData([...data.map((item) => ({ ...item, key: v4() }))])
		return () => {}
	}, [data])
	// Setting current banner
	useEffect(() => {
		setCurrentBanner(formatData[page])
		controls.start({
			opacity: 1,
			x: -20,
		})
		return () => {}
	}, [page, formatData])
	// Handlers
	// If not found a banner
	if (!currentBanner) {
		return <></>
	}
	// Animations

	return (
		<div className={styles['guup-banner']}>
			{/* Slider */}
			<div
				className={classnames(
					styles['guup-banner__container'],
					'has-background-light'
				)}
			>
				<div className={styles['guup-banner__media']}>
					<div className={styles['guup-banner__image']} />
				</div>
				<motion.div
					className={styles['guup-banner__content']}
					animate={{ opacity: 1, x: -20 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<UIText type='common' weight='semi-bold'>
						{currentBanner.text}
					</UIText>
				</motion.div>
			</div>
			{/* Dots */}
			<div
				className={classnames(
					styles['guup-banner__dots'],
					'has-background-grey-lighter'
				)}
			>
				{formatData.map((item, key) => (
					<span
						onClick={() => setPage(key)}
						className={classnames(styles['guup-banner__dots-dot'], {
							'has-background-dark': currentBanner.key === item.key,
							'has-background-grey-light': currentBanner.key !== item.key,
						})}
					/>
				))}
			</div>
		</div>
	)
}

CBanner.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			media: PropTypes.any,
		})
	).isRequired,
}

CBanner.defaultValues = {
	data: 0,
}

export default CBanner
