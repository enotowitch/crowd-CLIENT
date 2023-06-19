import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"

export default function AddComment({ children }) {
	return (
		<TextEditor btnText="Add Comment" fn="addComment">
			<hr></hr>
			<div className="title2 white mb">Add your comment</div>
			{children}
		</TextEditor>
	)
}