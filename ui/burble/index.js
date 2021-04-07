import React from 'react'
import PropTypes from 'prop-types'
import styles from './_burble.module.scss'
import classnames from 'classnames'

const UIBurble = ({ size, color }) => {
	return (
		<div
			className={classnames(
				styles['guup-burble'],
				styles[`guup-burble-${size}`],
				styles[`guup-burble-${color}`]
			)}
		/>
	)
}

UIBurble.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	color: PropTypes.oneOf(['primary', 'secondary']),
}

UIBurble.defaultProps = {
	size: 'small',
	color: 'primary',
}

export default UIBurble
