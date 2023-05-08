import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"
import Comment from "./Comment"
import ScrollTo from "../Navs/ScrollTo"
import ShowMore from "../FormElements/ShowMore"
import { skip_ } from "../../consts"

export default function Comments() {

	const [skip, skipSet] = useState(0)
	const { comments } = useComments(skip)

	return (
		<section className="comments">
			<div className="title">Comments</div>
			<hr></hr>

			{comments?.map(obj => <Comment key={obj._id} obj={obj} />)}

			<ShowMore onClick={() => skipSet(prev => prev + skip_)} />

			<AddComment />

			<ScrollTo className="comments" />
		</section>
	)
}