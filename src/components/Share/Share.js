import React from "react"
import "./index.scss"
import "./media.scss"
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function Share({ title, tag }) {
	return (
		<FacebookShareButton
			url={window.location.href}
			quote={"quote"}
			hashtag={tag}
		>
			<FacebookIcon size="26" round="true"></FacebookIcon>
		</FacebookShareButton>
	)
}