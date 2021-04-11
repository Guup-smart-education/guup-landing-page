import React from 'react'

const UIContainer = ({ children }) => {
	return (
		<div className='container is-fullhd pl-5 pr-5 is-overflow-hidden'>
			{children}
		</div>
	)
}

UIContainer.propTypes = {}

export default UIContainer
