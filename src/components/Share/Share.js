import React from "react"
import "./index.scss"
import "./media.scss"
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

export default function Share({ title, tag }) {
	return (
		<>
			<FacebookShareButton
				url={window.location.href}
				quote={"quote"}
				hashtag={"tag"}
			>
				<FacebookIcon size="26" round="true" />
			</FacebookShareButton>

			<TwitterShareButton
				url={window.location.href}
				title={"title"}
				hashtags={["tag", tag]}
			>
				<TwitterIcon size="26" round="true" />
			</TwitterShareButton>
		</>
	)
}