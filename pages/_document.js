'use strict'

import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

class CustomDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const {html, head, errorHtml, chunks} = renderPage()
		const styles = flush()
		return { html, head, errorHtml, chunks, styles }
	}
	render () {
		return (
			<html>
				<Head>
					<meta name='description' content='Pablo Angel Web Nextjs'/>
					<meta name='author' content='Team Pablo'/>
					<meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
					<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'/>
					<title>PabloAngel.Me</title>
					<link rel='shortcut icon' href='/static/images/favicon/favicon.ico' type='image/x-icon'/>
					<link rel='icon' href='/static/images/favicon/favicon.ico' type='image/x-icon'/>
					<link rel='stylesheet' type='text/css' href='/static/stylesheets/main.bundle.css'/>
				</Head>
				<body className='body_app'>
					{this.props.customValue}
					<Main className='wrapper__next'/>
					<NextScript/>
					<script src='//localhost:35729/livereload.js'></script>
				</body>
			</html>
		)
	}
}

export default CustomDocument
