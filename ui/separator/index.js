import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './_separator.module.scss'

const UISeparator = ({ size }) => {
	return (
		<div className={classnames(styles['guup-separator'], styles[size])}></div>
	)
}

UISeparator.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}

UISeparator.defaultProps = {
	size: 'small',
}

export default UISeparator
