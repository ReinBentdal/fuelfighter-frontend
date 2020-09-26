// packages
import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { A } from 'hookrouter'

// components
import '../_styles/home.css'
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'
import PostPreview from '../_templates/PostPreview'
import blogService from '../_services/blog.service'

// assets
import landingImage from '../_assets/photos/car_render_transparent_crop1.png';
import logoImage from '../_assets/brand/logo_black.png'
import logoWhiteImage from '../_assets/brand/logo_white.png'
import carRaceImage from '../_assets/photos/bil_speed.jpg'


export default function Home() {

	const [videoVisible, setVideoVisible] = useState(true)
	const onVideoEnd = () => setVideoVisible(false)

	const [posts, setPosts] = useState();

	useEffect(() => {
		blogService.blogposts(3)
			.then(json => setPosts(json))
	}, [])

	return (
		<>
			<Header floating />
			<section id="landing" className="section">
				<img alt="Car from behind" className="background-image" src={landingImage} />
				<div className={`background-video ${!videoVisible && 'video-hidden'}`}>
					<ReactPlayer
						url='videos/promotion_cut.mp4'
						width="100vw"
						height="56.25vw"
						style={{ minHeight: '500px', minWidth: '888px' }}
						controls={false}
						playing={true}
						onEnded={onVideoEnd}
						muted
					/>
				</div>
				<div className="grid">
					{/* <h1 id="title" className="heavy">DNV GL Fuel Fighter</h1> */}
					<img className="logo" src={logoWhiteImage} />
					<h3 className="quote">Inspire a sustainable future</h3>
				</div>
			</section>
			<section id="blog" className="bg-grey">
				<div className="grid">
					<div className="two-thirds">
						<h2>Latest updates</h2>
						<p>We at DNV GL Fuel Fighter want to share our experience with our friends, family and anyone else interested in what we do. Our blog is the best way for anyone interested to get an in depth view of what we do both socially and as a technical student organization.</p>
					</div>
					<div className="row-center">
						{posts
							? posts?.map(post => (
							<PostPreview
								key={post.id}
								id={post.id}
								title={post.title}
								description={post.description}
								author={post.author}
								date={post.date}
								image={post.image}
							/>
						))
							: <div className="spinner" />}
					</div>
					<A href="/blog" className="read-more">Visit blog</A>
				</div>
			</section>
			<section style={{background: '#0F213D', color: '#ddd'}}>
				<div className="grid">
					<div className="two-thirds">
						<h2>What we do</h2>
						<p>In short we build a energy efficient car. And what happends when we in the end of the year have a finished car? Well then we compete with other student organizations around the world which also strive for the best possible car! To learn more about what we do...</p>
						<A href="/about" className="read-more">Visit about page</A>
					</div>
				</div>
				<img className="image-full_width" src={carRaceImage} alt="Our car at Shell Eco Marathon in high speed" />
			</section>
			<section className="bg-grey">
				<div className="grid">
					<div className="two-thirds">
						<img alt="DNV GL Fuel Fighter logo" src={logoImage} width="64" />
						<h2>Apply for DNV GL Fuel Fighter</h2>
						<p>DNV GL Fuel Fighter is a technical student organization at NTNU working with the goal of making the world’s most energy efficient electric car.</p>
						<A className="button suggested-action" href="/join">Apply now</A>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
