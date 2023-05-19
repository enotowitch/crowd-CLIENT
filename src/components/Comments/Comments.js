import React from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"
import Comment from "./Comment"
import ScrollTo from "../Navs/ScrollTo"

export default function Comments({ children, type, className }) { // type=recommend(recommend)||rating(undefined||rating)

	const { comments, showMore } = useComments()

	return (
		<section className={`comments ${className}`}>
			<div className="title">Comments</div>
			<hr></hr>

			<div className="comments__scroll">
				{comments?.map(obj => <Comment key={obj._id} obj={obj} type={type} />)}
			</div>

			<AddComment>
				{children}
			</AddComment>

			<ScrollTo className="comments" />
		</section>
	)
}