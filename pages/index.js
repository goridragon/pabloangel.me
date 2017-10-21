'use strict'

import React from 'react'


class IndexPage extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<main className='main'>
				<section className='content__main'>
					<header className='header__content'>
						<div className='inner__header container'>
							<span className='logo__header'>PabloAngel.Me</span>
							<ul className='social__header'>
								<li className='item__social'>
									<a href='http://www.facebook.com/pabloangel.me' target='_blank' className='link__social'>
										<span className='icon__social icon-facebook2'/>
									</a>
								</li>
								<li className='item__social'>
									<a href='https://www.instagram.com/pabloangel.me/' target='_blank' className='link__social'>
										<span className='icon__social icon-instagram'/>
									</a>
								</li>
								<li className='item__social'>
									<a href='https://twitter.com/pabloangel_me' target='_blank' className='link__social'>
										<span className='icon__social icon-twitter'/>
									</a>
								</li>
								<li className='item__social'>
									<a href='https://github.com/pabloangel-me' target='_blank' className='link__social'>
										<span className='icon__social icon-github'/>
									</a>
								</li>
								<li className='item__social'>
									<a href='https://medium.com/@pabloangel_me' target='_blank' className='link__social'>
										<span className='icon__social icon-medium'/>
									</a>
								</li>
							</ul>
						</div>
					</header>
					<section className='title__content'>
						<span className='frase__title'>El pensamiento que se esfuerza enciende el espacio, pero la calidez del corazón es un constante fuego encendido. <span className='autor'>A. Y.</span></span>
					</section>
					<footer className='footer__content'>
						<div className='inner__footer  container'>
							<ul className='lists__footer'>
								<li className='item__footer'>
									<h2 className='h2__footer'>Pensar Ideas</h2>
									<p className='p__footer'>Me gusta imaginar un mundo donde las ideas lo cambian y mejoran.</p>
								</li>
								<li className='item__footer'>
									<h2 className='h2__footer'>Robótica</h2>
									<p className='p__footer'>Ésa que nos ayuda a facilitar nuestra vida cotidiana.</p>
								</li>
								<li className='item__footer'>
									<h2 className='h2__footer'>Desarrollador</h2>
									<p className='p__footer'>Aveces me creo un programador que creara Skynet</p>
								</li>
							</ul>
						</div>
					</footer>
				</section>
			</main>
		)
	}
}

export default IndexPage
