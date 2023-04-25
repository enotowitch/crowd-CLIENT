import React from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"

// TODO id=articleId
export default function Comments({ id }) { //id=articleId

	const { comments } = useComments(id)
	console.log(comments)

	return (
		<>
			{comments?.map(com => <div>{com.value}</div>)}
			<AddComment />
		</>
	)
}