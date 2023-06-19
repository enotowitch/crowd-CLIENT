import React from "react"
import "./index.scss"
import "./media.scss"
import AddComment from "./AddComment"
import useComments from "../../hooks/useComments"
import Comment from "./Comment"
import ScrollTo from "../Navs/ScrollTo"

export default function Comments({ children, type, className, postType }) { // type=recommend(recommend)||rating(undefined||rating); postType=article/company/...

	const { comments, showMore } = useComments(postType)

	return (
		<section className="w100">
			<div className={`comments ${className}`}>

				<AddComment postType={postType}>
					{children}
				</AddComment>

				<div className="title">Comments</div>
				<hr></hr>

				<div className="comments__scroll">
					{comments?.map(obj => <Comment key={obj._id} obj={obj} type={type} />)}
				</div>

			</div>
			<ScrollTo className="comments" />
		</section>
	)
}