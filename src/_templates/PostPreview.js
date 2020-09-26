import React from 'react'
import { A } from 'hookrouter'

import '../_styles/blog.css'

export default ({ id, title, description, author, date, image, featured }) => {

	const formatDate = (milliseconds) => {
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Descember"];
		var date = new Date(+milliseconds);
		return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
	}

	return (
		<A href={`/blog/${id}`} className={`post_preview ${featured ? 'featured' : ''}`}>
			<div>
				<img alt={title} src={image} />
				<header>
					<h4>{title}</h4>
					<div className="creation">
						<span className="author">{author}</span><br/>
						<span><time dateTime={date}>{formatDate(date)}</time></span>
					</div>
					<p className="post_preview-description">{description}</p>
						<span className="read-more">Read</span>
					</header>
			</div>
		</A>
	)
}