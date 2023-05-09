import React from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"
import Comment from "./Comment"
import ScrollTo from "../Navs/ScrollTo"

export default function Comments() {

	const { comments, showMore } = useComments()

	return (
		<section className="comments">
			<div className="title">Comments</div>
			<hr></hr>

			{comments?.map(obj => <Comment key={obj._id} obj={obj} />)}

			<AddComment />

			<ScrollTo className="comments" />
		</section>
	)
}