import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './_checkbox.module.scss'
import Text from './../text'

const UICheckBox = ({ label, onSelect, value, isSelected, disabled }) => {
	return (
		<div
			className={classnames(styles['guup-checkbox_wrapper'])}
			onClick={() => !disabled && onSelect(value)}
		>
			<div className={classnames(styles['guup-checkbox_wrapper__box'])}>
				{isSelected && <span className={classnames(styles['guup-check'])} />}
			</div>
			<div className={styles['guup-checkbox_wrapper__label']}>
				<Text type='text'>{label}</Text>
			</div>
		</div>
	)
}

UICheckBox.propTypes = {
	label: PropTypes.string,
	onSelect: PropTypes.func,
	value: PropTypes.any,
	isSelected: PropTypes.bool,
	disabled: PropTypes.bool,
}

export default UICheckBox
