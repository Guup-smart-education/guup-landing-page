import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './_checkboxList.module.scss'
import { UICheckBox } from './../../ui'

const index = ({
	list = [],
	register,
	name,
	setValue,
	disabled,
	validation,
	errors,
	isLight = false,
}) => {
	const [currentBox, setCurrentBox] = useState()
	useEffect(() => {
		register(name, validation)
		return () => {}
	}, [register])
	useEffect(() => {
		setValue(name, currentBox)
		return () => {}
	}, [currentBox])
	return (
		<div className={classnames(styles['guup-checkboxlist_wrapper'])}>
			{errors[name] && (
				<span className={classnames(styles['guup-error'], 'has-text-danger')}>
					{errors[name].type === 'required'
						? 'Selecione uma opção porfavor'
						: 'Aconteceu um erro'}
				</span>
			)}
			{list.map(({ label, value }, key) => (
				<div key={`guup-${key}-${value}-box`} className='mb-2'>
					<UICheckBox
						{...{
							label,
							value,
							onSelect: setCurrentBox,
							isSelected: value === currentBox,
							disabled,
							isLight,
						}}
					/>
				</div>
			))}
		</div>
	)
}

index.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.any.isRequired,
		})
	).isRequired,
	register: PropTypes.any,
	name: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	errors: PropTypes.any,
	validation: PropTypes.shape({
		required: PropTypes.bool,
	}),
	isLight: PropTypes.bool,
}

export default index
