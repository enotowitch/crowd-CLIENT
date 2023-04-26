import React from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"
import Comment from "./Comment"

export default function Comments({ articleId }) {

	const { comments } = useComments(articleId)

	return (
		<>
			<div className="title">Comments</div>
			<hr></hr>

			{comments?.map(obj => <Comment key={obj._id} obj={obj} />)}

			<AddComment />
		</>
	)
}