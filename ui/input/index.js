import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './_input.module.scss'

const UIInput = ({
	placeholder,
	register,
	name,
	validation = {},
	errors,
	disabled,
	type = 'text',
}) => {
	const [isBlur, setIsBlur] = useState()
	return (
		<div className={classnames(styles['guup-input_container'])}>
			<input
				className={classnames(styles['guup-input_box'], {
					'is-blur': isBlur,
					'has-error': errors[name],
				})}
				{...{ placeholder, onBlur: () => setIsBlur(), type, disabled }}
				{...register(name, validation)}
			/>
			{errors[name] && (
				<span className={classnames(styles['guup-error'], 'has-text-danger')}>
					{errors[name].type === 'required'
						? 'Prencha este campo porfavor'
						: errors[name].message || 'Aconteceu um error'}
				</span>
			)}
		</div>
	)
}

UIInput.propTypes = {
	placeholder: PropTypes.string,
	register: PropTypes.any,
	name: PropTypes.string.isRequired,
	validation: PropTypes.shape({
		required: PropTypes.bool,
		pattern: PropTypes.shape({
			value: PropTypes.any,
			message: PropTypes.string,
		}),
	}),
	errors: PropTypes.any,
	disabled: PropTypes.bool,
	type: PropTypes.string,
}

export default UIInput
