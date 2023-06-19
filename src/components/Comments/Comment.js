import React from "react"
import "./index.scss"
import "./media.scss"
import Rating from "./Rating"
import quotes from "../../img/quotes.svg"
import Recommended from "./Recommended";
import UserLogo from "../Other/UserLogo";
import Markdown from "../Other/Markdown";

export default function Comment({ obj, type }) { //obj=comment; type=recommend(recommend)||rating(undefined||rating)

	// comment.user
	const { img, name } = obj.user
	// comment
	let { value, createdAt, _id: commentId, likes, dislikes, recommend } = obj
	createdAt = createdAt.match(/(.+)(?:T.+)/)[1]
	const initRating = likes.length - dislikes.length

	return (
		<div className="comment">
			<div className="f fwn">
				<UserLogo img={img} iconClassName="icon_userMid m0" />
				<div className="comment__title">
					<div className="comment__userName">{name}</div>
					<div className="fcc g">
						{createdAt}
						<img src={quotes} />
						{type === "rating" || type === undefined &&
							<Rating commentId={commentId} initRating={initRating} />
						}
						{type === "recommend" &&
							<Recommended recommend={recommend} />
						}
					</div>
				</div>
			</div>
			<div className="comment__text">
				<pre>
					<Markdown value={value} />
				</pre>
			</div>
		</div>
	)
}