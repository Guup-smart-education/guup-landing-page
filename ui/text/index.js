import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './_text.module.scss'

function UIText({ children, color = 'dark', type, weight, isLink, onPress }) {
	return (
		<div className={classNames(styles['guup-text-wrapper'])}>
			<span
				onClick={onPress}
				className={classNames(
					styles[type],
					styles[`guup-text-${weight}`],
					styles[isLink ? `is-link` : ''],
					{
						'has-text-dark': color === 'dark',
						'has-text-light': color === 'light',
						'has-text-primary': color === 'primary',
						'has-text-link': color === 'secondary',
						'has-text-danger': color === 'danger',
						'has-text-success': color === 'success',
						'has-text-danger': color === 'danger',
						'has-text-grey': color === 'grey',
					},
					{
						'is-size-1': type === 'title',
						'is-size-2': type === 'subtitle',
						'is-size-3': type === 'header',
						'is-size-4': type === 'paragraph',
						'is-size-5': type === 'text',
						'is-size-6': type === 'common',
						'is-size-7': type === 'label',
					}
				)}
			>
				{children}
			</span>
		</div>
	)
}

UIText.propTypes = {
	type: PropTypes.oneOf([
		'title',
		'subtitle',
		'label',
		'paragraph',
		'common',
		'text',
		'header',
	]),
	color: PropTypes.oneOf([
		'dark',
		'ligth',
		'primary',
		'secondary',
		'danger',
		'success',
		'grey',
	]),
	weight: PropTypes.oneOf(['bold', 'heavy', 'normal', 'semi-bold']),
	isLink: PropTypes.bool,
	onPress: PropTypes.func,
}

UIText.defaultProps = {
	type: 'common',
	color: 'dark',
	weight: 'normal',
	isLink: false,
	onPress: () => console.log('on press text link'),
}

export default UIText
