import React from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import PropTypes from 'prop-types'
import UIText from '../text'
import styles from './_listItem.module.scss'

const ListItem = ({ image, description, label }) => {
	return (
		<div className={classnames(styles['guup-listitem'], 'mb-3')}>
			{image && (
				<div className={classnames(styles['guup-listitem-icon'], 'pt-2')}>
					<Image src={image} height={55} width={55} />
				</div>
			)}
			<div className={classnames(styles['guup-listitem-info'])}>
				<div>
					<UIText type='common'>{description}</UIText>
				</div>
				<div>
					<UIText color='grey' type='label' weight='semi-bold'>
						{label}
					</UIText>
				</div>
			</div>
		</div>
	)
}

ListItem.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
	label: PropTypes.string,
}

ListItem.defaultProps = {
	image: null,
	description: null,
	label: null,
}

export default ListItem
