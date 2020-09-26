import React from 'react'
import { A } from 'hookrouter'

import '../_styles/blog.css'

export default ({ id, title, description, type }) => (
	<A href={`/thesis/${id}`} className="post_preview">
		<div>
			<header>
				<h4>{title}</h4>
				<div className="creation">
					<span>{type}</span><br />
				</div>
				<p className="post_preview-description">{description}</p>
				<span className="read-more">Read</span>
			</header>
		</div>
	</A>
)