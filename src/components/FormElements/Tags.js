import React from "react"
import "./index.scss"
import "./media.scss"
import Tag from "./Tag"

export default function Tags(props) { // don't touch {...props}

	const { arr } = props

	return (
		arr?.length > 0 &&
		<div className="tags">
			{arr?.map((item, ind) => (
				<Tag
					key={ind}
					text={item}
					{...props}
				/>
			))}
		</div>
	)
}