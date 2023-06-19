import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "./IconText"
import usePostLikes from "../../hooks/usePostLikes"

export default function IconLike({ id, likes, likePostType, text }) { // id=postId

	const { likeCount, likePost } = usePostLikes(id, likes)

	return (
		<IconText
			src="likes"
			text={likeCount || text || 0}
			iconClassName="icon_small mr05 likes"
			onClick={(e) => likePost(e, likePostType)}
		/>
	)
}