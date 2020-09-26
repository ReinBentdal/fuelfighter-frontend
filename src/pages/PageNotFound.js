import React from 'react';

// components
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'

import '../_styles/pageNotFound.css'

// assets
import landingImage from '../_assets/photos/car_render_transparent_crop1.png';

export default function PageNotFound() {
  return (
    <>
      <Header floating/>
	      <section id="notfound">
		      <img alt="Car from behind" src={landingImage} />
		      <div><h1>Page not found</h1></div>
	      </section>
      <Footer />
    </>
  )
}
