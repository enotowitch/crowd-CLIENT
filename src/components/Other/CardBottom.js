import React from "react"
import IconText from "../Icons/IconText"
import IconLike from "../Icons/IconLike"

export default function CardBottom({ id, views, likes, clickText, likePostType, hideViews }) { // id=articleId/BonusId views=dbViews likes=dbLikes
	return (
		<div className="f g jcsb">
			<div className="f g">
				{!hideViews && <IconText src="views" text={views} iconClassName="icon_small mr05" />}
				<IconLike id={id} likes={likes} likePostType={likePostType} />
			</div>
			<IconText text={clickText} className="brand" />
		</div>
	)
}