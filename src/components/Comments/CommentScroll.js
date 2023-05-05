import React from "react"
import "./index.scss"
import "./media.scss"
import img from "../../img/comments.svg"

export default function CommentScroll() {
	return (
		<img
			src={img}
			onClick={() => document.querySelector(".comments").scrollIntoView({ behavior: "smooth" })}
			className="commentScroll"
		/>
	)
}