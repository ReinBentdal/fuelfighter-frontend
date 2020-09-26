// packages
import React, { useState, useEffect } from 'react'

// components
import '../_styles/thesis.css'
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'
import ThesisPreview from '../_templates/ThesisPreview'
import thesisService from '../_services/thesis.service'

export default function Thesis() {
	return (
		<>
			<Header />
			<section id="thesis-page">
				<div className="grid">
					<div className="two-thirds">
						<h1 className="heavy" >Suggested thesises</h1>
						<p>Below you will find our suggestions for possible bachelor and master theses that could be written as a part of our project in the year to come. These descriptions provides a picture of some of the projects we’re working on and what we have identified as our needs in the upcoming year. But they are just propositions, so if you want to do something similar to what we have written here, or have any other ideas that you think would fit in our project, we strongly encourage you to contact us, and we’ll find a solution together. If you have questions or is interested in writing your thesis as a part of our project, please contact our project manager at leder@fuelfighter.no</p>
					</div>
					<ThesisSection group="Autonomous" />
					<ThesisSection group="Mechanical" />
					<ThesisSection group="Electrical" />
					<ThesisSection group="Other" />
				</div>
			</section>
			<Footer />
		</>
	)
}

function ThesisSection({ group }) {

	const [thesises, setThesises] = useState([])

	useEffect(() => {
		thesisService.thesises(group)
			.then(data => {
				if (data !== false) {
					setThesises(data)
				}
			})
	}, [group])

	return (
		<>
			<h2>{group}</h2>
			<div className="row-center">
				{thesises
					? thesises.map(thesis => {
						return <ThesisPreview
							key={thesis.id}
							id={thesis.id}
							title={thesis?.title}
							description={thesis?.description}
							type={thesis?.type}
						/>
					})
					: <div className="spinner" />}
			</div>
		</>
	)
}