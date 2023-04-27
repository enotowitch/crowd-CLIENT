import React from "react"
import "./index.scss"
import "./media.scss"
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function Share({ title }) {
	return (
		<FacebookShareButton
			url={window.location.href}
			quote={title}
		>
			<FacebookIcon size="26" round="true"></FacebookIcon>
		</FacebookShareButton>
	)
}