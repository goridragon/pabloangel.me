'use strict'

import React from 'react'

class Error extends React.Component {
	static async getInitialProps ({ req, res, jsonPageRes, pathname }) {
		const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
		return {
			status: statusCode,
			ruta: pathname
		}
	}
	render() {
		return (
			<section className='error__content'>
				<div className='error__content--message'>
					<h3>Error {this.props.status} - {this.props.ruta}</h3>
				</div>
			</section>
		)
	}
}

export default Error