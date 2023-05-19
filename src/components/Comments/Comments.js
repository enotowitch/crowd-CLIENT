import React from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"
import Comment from "./Comment"
import ScrollTo from "../Navs/ScrollTo"

export default function Comments({ children, type }) { // type=recommend(recommend)||rating(undefined||rating)

	const { comments, showMore } = useComments()

	return (
		<section className="comments">
			<div className="title">Comments</div>
			<hr></hr>

			{comments?.map(obj => <Comment key={obj._id} obj={obj} type={type} />)}

			<AddComment>
				{children}
			</AddComment>

			<ScrollTo className="comments" />
		</section>
	)
}