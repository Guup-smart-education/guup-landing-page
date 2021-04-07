import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './_button.module.scss'

const UIButton = ({ preset, children, onPress, type, disabled }) => {
	return (
		<button
			onClick={onPress}
			className={classnames(styles['guup-button'], 'button', {
				'is-dark': preset === 'dark',
				'is-primary': preset === 'primary',
				'is-light': preset === 'light',
				'is-link': preset === 'secondary',
			})}
			{...{ type, disabled }}
		>
			<span className='has-text-weight-bold'>{children}</span>
		</button>
	)
}

UIButton.propTypes = {
	preset: PropTypes.oneOf([
		'dark',
		'primary',
		'contrast',
		'secondary',
		'ligth',
	]),
	onPress: PropTypes.func.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
}

UIButton.defaultProps = {
	preset: 'dark',
	onPress: () => {},
	type: 'button',
	disabled: false,
}

export default UIButton
