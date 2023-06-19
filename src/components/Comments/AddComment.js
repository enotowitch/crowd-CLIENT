import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"

export default function AddComment({ children, postType }) {
	return (
		<TextEditor btnText="Post" fn="addComment" postType={postType} placeholder="Write your comment">
			<div className="title2 white mb">Post your comment</div>
			{children}
		</TextEditor>
	)
}