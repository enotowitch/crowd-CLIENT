import React from "react"
import "./index.scss"
import "./media.scss"
import Rating from "./Rating"

export default function Comment({ obj }) { //obj=comment

	// comment.user
	const { img, name } = obj.user
	// comment
	let { value, createdAt, _id: commentId } = obj
	createdAt = createdAt.match(/(.+)(?:T.+)/)[1]

	return (
		<div className="comment">
			<div className="f fwn">
				<img src={img} className="icon_mid" />
				<div className="comment__title">
					<div>{name}</div>
					<div className="f">
						{createdAt}
						<Rating commentId={commentId} />
					</div>
				</div>
			</div>
			<div className="comment__text">
				{value}
			</div>
		</div>
	)
}