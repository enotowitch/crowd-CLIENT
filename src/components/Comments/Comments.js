import React from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"

export default function Comments({ articleId }) {

	const { comments } = useComments(articleId)

	return (
		<>
			{comments?.map(com => <div>{com.value}</div>)}
			<AddComment />
		</>
	)
}