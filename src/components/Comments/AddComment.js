import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"

export default function AddComment() {
	return (
		<section>
			<TextEditor btnText="Add Comment" fn="addComment" />
		</section>
	)
}