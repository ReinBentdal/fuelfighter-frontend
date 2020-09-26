// packages
import React, { useState, useEffect } from 'react'
import { A } from 'hookrouter'

// components
import '../_styles/blogpost.css'
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'
import thesisService from '../_services/thesis.service'

export default function ThesisPostPage({ id }) {

	const [thesis, setThesis] = useState()

	const returnBack = () => window.history.back()

	useEffect(() => {
		thesisService.thesis(id)
			.then(data => {
				if (data) {
					setThesis(data)
				}
			})
	}, [id])

	return (
		<>
			<Header />
			<section id="blogpost">
				{!thesis
					? <div className="grid">
						<div className="row-center">
							<div className="spinner" />
						</div>
					</div>
					: <>
						<article>
							<header>
								<p><button className="small-button" onClick={returnBack}>Return</button></p>
								<h1 className="heavy">{thesis.title}</h1>
								<h4>{thesis.type}</h4>
							</header>
							<section dangerouslySetInnerHTML={{ __html: thesis.content }} />
						</article>
						<hr />
						<div className="grid">
							<div className="two-thirds">
								<A href="/thesis" className="return">Return to thesis page</A>
							</div>
						</div>
					</>
				}
			</section>
			<Footer />
		</>
	)
}
