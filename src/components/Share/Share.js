import React from "react"
import "./index.scss"
import "./media.scss"
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

export default function Share({ title, tag }) {

	const url = window.location.href
	const size = 26

	return (
		<>
			<TwitterShareButton
				url={url}
				title={title}
				hashtags={[tag]}
			>
				<TwitterIcon size={size} round="true" />
			</TwitterShareButton>

			<FacebookShareButton
				url={url}
				quote={title}
				hashtag={tag}
			>
				<FacebookIcon size={size} round="true" />
			</FacebookShareButton>
		</>
	)
}